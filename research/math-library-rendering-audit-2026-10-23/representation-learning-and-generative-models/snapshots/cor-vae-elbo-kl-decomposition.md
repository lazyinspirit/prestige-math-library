---
id: cor-vae-elbo-kl-decomposition
kind: corollary
title: "The VAE evidence equals the ELBO plus reverse KL"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-variational-autoencoder
  - thm-elbo-kl-decomposition
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "The explicit density-ratio identity is choice-free. AC is used only by the supplied theorem to identify that integral with the library reverse-KL and to infer nonnegativity."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2016.pdf"
      locator: "§2.2, equations (12)–(14), PDF pp. 4–5."
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page course note read; §2.3.2, PDF pp. 3–4."
---

## Statement

Fix an observation $x$ in a VAE with latent reference measure $\mu_Z$. Let $\gamma_\theta(\cdot;x)$ be its nonnegative measurable joint-density slice, let $Z_\theta(x)=\int\gamma_\theta(z;x)\,d\mu_Z(z)\in(0,\infty)$, and let $\pi_\theta(z\mid x)=\gamma_\theta(z;x)/Z_\theta(x)$. Let $q_\phi(\cdot\mid x)$ be a measurable probability density satisfying $q_\phi=0$ $\mu_Z$-almost everywhere on $\{\pi_\theta=0\}$ and
$$\int q_\phi(z\mid x)\bigl(|\log\gamma_\theta(z;x)|+|\log q_\phi(z\mid x)|\bigr)\,d\mu_Z(z)<\infty.$$
Then the choice-free density-ratio identity is
$$\log Z_\theta(x)=\operatorname{ELBO}_{\theta,\phi}(x)+\int q_\phi(z\mid x)\log\!\left(\frac{q_\phi(z\mid x)}{\pi_\theta(z\mid x)}\right)\,d\mu_Z(z),$$
where the ratio integrand is zero when $q_\phi=0$. Under the Axiom of Choice, the final integral is the library reverse-KL divergence $D_{\rm KL}(q_\phi\mu_Z\|\pi_\theta\mu_Z)$ and is nonnegative; hence $\operatorname{ELBO}_{\theta,\phi}(x)\le\log Z_\theta(x)$.

## Statement references

[[def-variational-autoencoder|The VAE density, evidence, posterior, and ELBO definitions]].

[[thm-elbo-kl-decomposition|The generic choice-free density-ratio identity and AC-dependent KL branch]].

[[def-axiom-of-choice|The Axiom of Choice]].

[Blei, Kucukelbir, and McAuliffe, Variational Inference: A Review for Statisticians](https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2016.pdf).

[Zheng, Hu, and Deng, 10-708 Lecture 13: Variational Inference II](https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf).

## Facts & Assumptions

**Given:** A fixed observation $x$, the VAE joint-density slice, its positive finite evidence, an admissible encoder density, and AC for the library KL branch.

[F1] [[def-variational-autoencoder]]: at each admissible fixed $x$, $\gamma_\theta(\cdot;x)$ is nonnegative measurable, $0<Z_\theta(x)=\int\gamma_\theta\,d\mu_Z<\infty$, $\pi_\theta=\gamma_\theta/Z_\theta$, and $q_\phi$ is a probability density with the stated support and absolute log-integrability conditions.

[F2] [[thm-elbo-kl-decomposition]]: for a sigma-finite reference measure and such $\gamma,Z,\pi,q$, the density-ratio identity $\log Z=\operatorname{ELBO}(q)+\int q\log(q/\pi)\,d\mu$ holds without choice; under AC the integral is $D_{\rm KL}(q\mu\|\pi\mu)\ge0$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is invoked only for the library KL identification and nonnegativity in [F2].

## Proof

1.1 By [F1], $(\mu_Z,\gamma_\theta(\cdot;x),Z_\theta(x),\pi_\theta(\cdot\mid x),q_\phi(\cdot\mid x))$ satisfies the sigma-finiteness, positive finite normalizer, support, and absolute log-integrability hypotheses of the generic decomposition. Its ELBO integral is exactly $\operatorname{ELBO}_{\theta,\phi}(x)$ by definition. [given, F1]

2.1 Apply [F2] to these objects. Its choice-free branch gives the displayed density-ratio identity. Under [A1], its second branch identifies the ratio integral as the nonnegative reverse-KL divergence, and rearranging yields the stated lower bound. [A1, F2, step 1.1, algebra] ∎
