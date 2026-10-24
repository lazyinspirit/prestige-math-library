---
id: lem-ip-limited-angle-radon-data-is-l2-on-compact-support
kind: lemma
title: Restricted Radon data are square-integrable on fixed compact support
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-schwartz-radon-transform
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: compactly supported Radon data."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 12–13: line-data parameterization."
---

## Statement

Assume the Axiom of Countable Choice. Let $\Omega\subset\mathbb R^2$ be a nonempty bounded open set, let $\Theta\subset S^1$ be measurable, and use arc-length measure $d\theta$ on $S^1$. For every $f\in C_c^\infty(\Omega;\mathbb C)$, the function $(\theta,s)\mapsto R_{\mathcal S}f(\theta,s)$ belongs to $L^2(\Theta\times\mathbb R,d\theta\,ds)$ and satisfies $\|R_{\mathcal S}f\|_{L^2(\Theta\times\mathbb R)}^2\le \operatorname{diam}(\Omega)\,|\Theta|\,\|f\|_{L^2(\mathbb R^2)}^2$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a nonempty bounded open set $\Omega\subset\mathbb R^2$, a measurable $\Theta\subset S^1$, and $f\in C_c^\infty(\Omega;\mathbb C)$.

[F1] [[def-ip-schwartz-radon-transform]]: the data on the line with normal $\theta$ and offset $s$ is $\int_\mathbb R f(s\theta+t\theta^\perp)\,dt$.

[F2] [[cor-cauchy-schwarz-inequality-for-l-two]]: for square-integrable functions $u,v$, $\int|uv|\le\|u\|_2\|v\|_2$.

[F3] [[cor-c-one-change-of-variables-for-l-one-functions]]: under Countable Choice, a $C^1$ diffeomorphism transforms an $L^1$ Lebesgue integral by the absolute Jacobian determinant.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable functions on product spaces satisfy the iterated-integral formula.

[A1] [[def-countable-choice]]: Countable Choice is used by [F3] for the Lebesgue change-of-variables formula; the remaining estimates are direct.

## Proof

1.1 Choose $R>0$ with $\operatorname{supp}f\subseteq\overline B_R(0)$. If $|t|>R$, then $|s\theta+t\theta^\perp|\ge|t|>R$ and the integrand in [F1] is zero. On any compact set of $(\theta,s)$, uniform continuity of $f$ on the compact image of $(s,\theta,t)$ for $|t|\le R$ shows that the line integrals vary continuously: the difference of two such integrals is at most $2R$ times the uniform difference of their integrands. Hence the data function is continuous and measurable. [F1, given, construct]

1.2 Put $D=\operatorname{diam}(\Omega)$ and $T_{\theta,s}=\{t\in\mathbb R:s\theta+t\theta^\perp\in\Omega\}$. Any two points of $T_{\theta,s}$ differ by at most $D$, so this open set is contained in an interval of length at most $D$. Cauchy--Schwarz [F2] on $T_{\theta,s}$, where the constant function $1$ has squared integral at most $D$, gives $|R_{\mathcal S}f(\theta,s)|^2\le D\int_{\mathbb R}|f(s\theta+t\theta^\perp)|^2\,dt$. [F1, F2, given]

2.1 The function $(\theta,s,t)\mapsto|f(s\theta+t\theta^\perp)|^2$ is bounded and vanishes unless $|s|,|t|\le R$, so it is integrable on the finite-measure set $\Theta\times[-R,R]^2$. Apply [F4] to exchange the iterated integrals, and for each $\theta$ apply [F3] to the orthogonal diffeomorphism $(s,t)\mapsto s\theta+t\theta^\perp$, whose absolute Jacobian is one. This gives $\int_\Theta\int_{\mathbb R^2}|f(s\theta+t\theta^\perp)|^2\,ds\,dt\,d\theta=|\Theta|\,\|f\|_{L^2(\mathbb R^2)}^2$. Integrating step 1.2 yields the claimed bound and square-integrability. [F3, F4, A1, step 1.2] ∎
