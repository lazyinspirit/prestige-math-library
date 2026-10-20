---
id: ex-vae-inference-gap
kind: example
title: "A Gaussian model with a positive inference gap and a collapsed latent"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-variational-autoencoder
  - cor-vae-elbo-kl-decomposition
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - thm-normal-normal-conjugate-update
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-density
  - lem-normal-location-scale-mean-and-variance
justified_by: []
proof_strategy: direct
axiom_use: "AC is used through the normal-density suppliers and the VAE ELBO corollary to identify the density-ratio integral with the library KL; no stronger choice principle is used."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 5"
      url: "https://www.bayesrulesbook.com/chapter-5"
      locator: "§§5.3.1–5.3.4: the known-variance Normal-Normal model and its completing-the-square posterior derivation."
    - title: "Diederik P. Kingma and Max Welling, Auto-Encoding Variational Bayes, arXiv:1312.6114v1"
      url: "https://arxiv.org/pdf/1312.6114v1"
      locator: "§§2.2–3: ELBO, encoder/decoder roles and a Gaussian recognition-family example."
    - title: "Junxian He, Daniel Spokoyny, Graham Neubig, and Taylor Berg-Kirkpatrick, Lagging Inference Networks and Posterior Collapse in Variational Autoencoders"
      url: "https://arxiv.org/pdf/1901.05534"
      locator: "arXiv v2, Abstract and §§2.1–2.2, PDF pp. 1–3: the precise posterior-collapse state."
---

## Example

Assume AC and use Lebesgue measure for the latent densities. In the first model, a scalar latent variable $Z$ has prior $N(0,4)$, and conditional on $Z=z$ the observation is $X=(Y_1,Y_2)$ with $Y_1,Y_2$ IID $N(z,1)$. At the observed value $x=(2,4)$, the evidence is finite and positive and the posterior is $N(8/3,4/9)$. Restrict the encoder family to $q_m(z\mid x)=N(m,4/9)$ for $m\in[-1,1]$ and choose $m=0$. This encoder is admissible and its reverse-KL gap, with $D_{\rm KL}(q\|\pi):=\int q(z)\log(q(z)/\pi(z))\,dz$, is $D_{\rm KL}(q_0(\cdot\mid x)\|\pi(\cdot\mid x))=8>0$, so its ELBO is exactly $8$ below the log evidence.

In a second model, let $Z\sim N(0,1)$ and let the decoder density be $p(x\mid z)=N(x;0,1)$, independent of $z$. At observed value $x=0$, the posterior equals the prior. Choosing the encoder $q(z\mid 0)=N(0,1)$ gives zero reverse-KL gap and ELBO equal to the log evidence. This is one posterior-collapse configuration in which the decoder ignores the latent variable; it does not assert that VAE training always collapses.

## Example references

[[def-variational-autoencoder|The VAE densities, posterior and ELBO conventions]].

[[cor-vae-elbo-kl-decomposition|The evidence–ELBO–reverse-KL identity under AC]].

[[thm-normal-normal-conjugate-update|The exact Normal-Normal posterior and positive evidence]].

[[def-kullback-leibler-divergence|The directional reverse-KL convention]].

[Johnson, Ott, and Dogucu, Bayes Rules!, Chapter 5](https://www.bayesrulesbook.com/chapter-5).

[Kingma and Welling, Auto-Encoding Variational Bayes, arXiv v1](https://arxiv.org/pdf/1312.6114v1).

[He, Spokoyny, Neubig, and Berg-Kirkpatrick, Lagging Inference Networks and Posterior Collapse in Variational Autoencoders](https://arxiv.org/pdf/1901.05534).

## Facts & Assumptions

**Given:** AC; the two stated latent-variable models and observations; the restricted encoder family in the first model; and the definitions of evidence, posterior, admissibility and ELBO.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is used by the Gaussian density suppliers and the library KL branch.

[F1] [[def-variational-autoencoder]]: for positive finite evidence, $\pi=\gamma/Z$; an encoder is admissible when it is a probability density supported where $\pi$ is positive with the stated absolute log-integrability; its ELBO is the integral of $\log\gamma-\log q$ under $q$.

[F2] [[thm-normal-normal-conjugate-update]]: with prior $N(\mu_0,\tau_0^2)$, positive known variance $\sigma^2$, and $n\ge1$ IID observations from $N(\mu,\sigma^2)$, the evidence is finite and positive and the posterior has variance $(\tau_0^{-2}+n\sigma^{-2})^{-1}$ and mean equal to that variance times $\mu_0/\tau_0^2+n\bar y/\sigma^2$.

[F3] [[def-standard-normal-and-normal-laws]] and [[lem-normal-location-scale-density]]: $N(0,1)$ is a probability law with density $e^{-z^2/2}/\sqrt{2\pi}$, and for $\sigma>0$, $N(m,\sigma^2)$ has density $(2\pi\sigma^2)^{-1/2}\exp(-(z-m)^2/(2\sigma^2))$.

[F4] [[lem-normal-location-scale-mean-and-variance]]: a variable with law $N(m,\sigma^2)$ has mean $m$ and finite variance $\sigma^2$.

[F5] [[def-kullback-leibler-divergence]]: for probability measures with densities $q$ and $\pi$ relative to one reference measure and $q\,\mu\ll\pi\,\mu$, the reverse divergence is $\int q\log(q/\pi)\,d\mu$.

[F6] [[cor-vae-elbo-kl-decomposition]]: for each admissible fixed observation under AC, log evidence equals ELBO plus the library reverse-KL divergence.

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 In the first model set $\mu_0=0$, $\tau_0^2=4$, $\sigma^2=1$, $n=2$, and $\bar y=(2+4)/2=3$. By [F2], the posterior variance is $(1/4+2)^{-1}=4/9$ and its mean is $(4/9)(0+2\cdot3)=8/3$; the evidence is finite and positive. [A1, F2, given, algebra]

1.2 The chosen $q_0=N(0,4/9)$ lies in the family because $0\in[-1,1]$, while the posterior mean $8/3$ is outside that interval. Both Gaussian densities are strictly positive, so $q_0$ is supported where the posterior is positive. Their logarithms are quadratic and $q_0$ has finite second moment by [F4], so the absolute log-integrability required in [F1] holds. Using the common-variance density formula [F3],
$$\log\!\left(\frac{q_0(z\mid x)}{\pi(z\mid x)}\right)=\frac{(z-8/3)^2-z^2}{2(4/9)}=-6z+8.$$
Taking $q_0$-expectations and using [F4] gives $D_{\rm KL}(q_0\|\pi)=8$ by the directional convention [F5]. [A1, F1, F3, F4, F5, step 1.1, algebra]

2.1 Applying [F6] to the first model, the log-evidence minus ELBO is exactly this reverse-KL value $8$, which is strictly positive. [A1, F6, step 1.2, algebra]

3.1 In the second model, write $h(x)=N(x;0,1)$ and let $r$ be the $N(0,1)$ prior density. At $x=0$, [F3] gives $0<h(0)<\infty$ and $\int r(z)\,dz=1$, so $\gamma(z;0)=r(z)h(0)$ has evidence $Z(0)=h(0)$ and posterior $\pi(z\mid0)=r(z)$. The encoder $q(z\mid0)=r(z)$ has full support and finite second moment by [F4]; its log density and $\log\gamma(z;0)$ are quadratic, so it is admissible by [F1]. Thus its reverse-KL is zero and [F6] gives ELBO equal to log evidence. The decoder density is independent of $z$, so this is a collapsed-latent configuration only. [A1, F1, F3, F4, F6, algebra] ∎
