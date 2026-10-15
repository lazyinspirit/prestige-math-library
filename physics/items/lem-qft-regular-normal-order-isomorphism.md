---
id: lem-qft-regular-normal-order-isomorphism
kind: lemma
title: Regular normal-ordering change is an exact star isomorphism
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-regular-polynomial-functional-algebra
  - lem-qft-tensor-test-function-density
  - thm-qft-regular-wick-star-associativity
  - thm-tensor-product-distributions-and-iterated-pairings
  - lem-distribution-pairing-with-smooth-parameter-families
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
  thm-qft-regular-wick-star-associativity: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
  lem-distribution-pairing-with-smooth-parameter-families: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 5
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 5, equations (63)–(64) and the statement that the kernel-change map intertwines the regular star products.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, section 3.3.2, equations (3.243)–(3.245), normal ordering and contractions; the distributional isomorphism is proved locally.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $W\in\mathcal D'(X\times X)$, $X=\mathbb R^d$, and let
$K\in\mathcal D'(X\times X)$ be symmetric under interchange of its
variables. Define
$$ \Gamma_KF(\phi)=\langle K,F^{(2)}(\phi)\rangle,\qquad \alpha_K=\exp\!\left(\frac{\eta}{2}\Gamma_K\right) =\sum_{j\ge0}\frac{(\eta/2)^j}{j!}\Gamma_K^j $$
on $\mathcal P_{\mathrm{reg}}(X)[\eta]$. Each sum is finite on each
polynomial because $\Gamma_K$ lowers degree by two. Then $\alpha_K$ is
invertible with inverse $\alpha_{-K}$, and
$$ \alpha_K(F\star_W G)=\alpha_K(F)\star_{W+K}\alpha_K(G) $$
for all regular polynomial functionals $F,G$. Thus the change from $W$
to $W+K$ is an exact algebra isomorphism on this regular class.

## Facts & Assumptions

**Given:** [F1]–[F4], a symmetric continuous bidistribution $K$, and the formal-parameter convention of [A1].

[A1] The parameter $\eta$ is formal and fixed by complex conjugation.

[F1] The regular coefficient kernels and their functional derivatives are smooth and compactly supported; compactly supported complex Riemann integrals are evaluated componentwise as defined in [[def-qft-regular-polynomial-functional-algebra]], and the coefficient representation is unique ([[lem-qft-tensor-test-function-density]]).

[F2] Tensor products of distributions pair independently and iterated pairings associate ([[thm-tensor-product-distributions-and-iterated-pairings]]).

[F3] Distributional pairings with smooth common-compact-support parameter families are smooth, with derivatives passed through the pairing ([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F4] For every continuous bidistribution $W$, the regular contraction product $\star_W$ is well defined and associative, with finite sums ([[thm-qft-regular-wick-star-associativity]]).

## Proof

**Given:** [A1]–[F4], $W$, and symmetric $K$.

1.1 For a homogeneous coefficient of degree $m$, one application of $\Gamma_K$ contracts two derivative variables against $K$, leaving a smooth compact kernel by [F1]–[F3]. It lowers the polynomial degree by two; therefore $\Gamma_K^jF=0$ when $2j>\deg F$, so $\alpha_KF$ is a finite sum in $\mathcal P_{\mathrm{reg}}(X)[\eta]$. The same finite argument defines $\alpha_{-K}$. [A1, F1, F2, F3, construct]

2.1 For this computation set $E_f(s,\phi):=\sum_{m\ge0}s^m\ell_f(\phi)^m/m!$ as a formal generating series. Each second derivative contracts to $K(f,f)E_f$. Coefficientwise this gives $$ \alpha_KE_f(s)=\exp\!\left(\frac{\eta s^2}{2}K(f,f)\right)E_f(s), $$ where the exponential is its formal power series; each coefficient used below involves only finitely many derivatives. [A1, F1, step 1.1, algebra]

3.1 On two auxiliary generators, the left side of the asserted identity has the scalar factor $$ \exp\!\left(\eta stW(f,g)+\frac{\eta}{2}K(sf+tg,sf+tg)\right). $$ The right side has factor $$ \exp\!\left(\frac{\eta s^2}{2}K(f,f)+\frac{\eta t^2}{2}K(g,g)+\eta st(W+K)(f,g)\right). $$ Symmetry and bilinearity of $K$ make these exponents equal. [step 2.1, F4, algebra]

4.1 Comparing coefficients of $s,t$ in step 3.1 first proves the identity for powers of linear functionals. Replacing $f$ by $\sum_j s_jf_j$ and comparing the coefficient of $s_1\cdots s_m$, and doing the same independently for $g$, proves it for every finite product of distinct linear functionals. Each fixed coefficient is continuous in its smooth compact kernels by [F2]–[F4]; the density in [F1] therefore extends the identity to all $F,G\in\mathcal P_{\mathrm{reg}}(X)$. For an input of degree $d$, the coefficient of $\Gamma_K^r$ in $\alpha_K\alpha_{-K}$ is multiplied by $\sum_{j=0}^r\binom rj(-1)^{r-j}=(1-1)^r$, which is zero for $r>0$ and one for $r=0$. The sums are finite because $\Gamma_K$ lowers degree by two, so $\alpha_K\alpha_{-K}=I$; the reverse composition is identical. [F1, F2, F3, F4, step 3.1, algebra] ∎
