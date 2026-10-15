---
id: thm-qft-regular-wick-star-associativity
kind: theorem
title: Regular Wick-star contractions are well defined and associative
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-regular-polynomial-functional-algebra
  - lem-qft-tensor-test-function-density
  - thm-tensor-product-distributions-and-iterated-pairings
  - lem-distribution-pairing-with-smooth-parameter-families
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
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
      locator: Complete 42-page notes, section 5, equations (56)–(64), the regular-functional star product and the change-of-kernel normal-ordering map.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, sections 3.3.1–3.3.2, equations (3.235)–(3.245), contraction and Wick expansion. The distributional and functional-domain arguments below are proved locally.
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

Let $X=\mathbb R^d$, $d\ge1$, and let $W\in\mathcal D'(X\times X)$ be
any continuous complex bidistribution. For a real formal parameter $\eta$
and $F,G\in\mathcal P_{\mathrm{reg}}(X)$, define
$$ F\star_W G=\sum_{k\ge0}\frac{\eta^k}{k!}\left\langle W^{\otimes k},F^{(k)}(\phi)\otimes G^{(k)}(\phi)\right\rangle . $$
The pairing is over $k$ independent pairs of variables; $W^{\otimes k}$
is formed by iterated distributional tensor products, not by multiplying
distributions at coincident points. The sum is finite because the inputs are
polynomial. It defines an element of
$\mathcal P_{\mathrm{reg}}(X)[\eta]$, and $\star_W$ is associative.
Here complex conjugation is $\overline{a+ib}=a-ib$ for $a,b\in\mathbb R$.
If $W$ is Hermitian in the sense
$\overline{\langle W,\overline g\otimes\overline f\rangle}
=\langle W,f\otimes g\rangle$, then
$(F\star_W G)^*=G^*\star_W F^*$, where $F^*(\phi)=\overline{F(\phi)}$.
For $\ell_f(\phi)=\int_X f(x)\phi(x)\,dx$,
$$ [\ell_f,\ell_g]_{\star_W}=\eta\bigl(W(f,g)-W(g,f)\bigr), \qquad W(f,g):=\langle W,f\otimes g\rangle . $$

## Facts & Assumptions

**Given:** [A1], the regular polynomial class, the continuous bidistribution $W$, and the supplier statements below.

[A1] The formal parameter $\eta$ is fixed by the involution and has no analytic or physical interpretation in this mathematical item.

[F1] A regular polynomial is a finite sum with unique symmetric test kernels; its $k$-th derivative is the smooth compact kernel displayed in the definition, and complex Riemann integrals of its compact kernels are evaluated componentwise as defined there ([[def-qft-regular-polynomial-functional-algebra]], [[lem-qft-tensor-test-function-density]]).

[F2] Tensor products of distributions exist as continuous distributions; their iterated pairings associate and agree on product tests ([[thm-tensor-product-distributions-and-iterated-pairings]]).

[F3] Pairing a distribution against a smooth parameter family with locally common compact support produces a smooth function, and derivatives pass through the pairing ([[lem-distribution-pairing-with-smooth-parameter-families]]).

## Proof

**Given:** [A1] and [F1]–[F3].

1.1 For each $k$, [F2] constructs $W^{\otimes k}$ on the independent variable pairs. The kernels $F^{(k)}(\phi)$ and $G^{(k)}(\phi)$ in [F1] are smooth and compactly supported, so the displayed pairing is defined. In each homogeneous term of $F$ and $G$, pairing the $k$ contracted variables leaves a smooth compact kernel in the remaining variables: the support lies in the projection of the original compact coefficient supports, and [F3] passes every remaining-variable derivative through the pairing. The raw remaining-variable kernel need not be symmetric under permutations exchanging a variable from the $F$ block with one from the $G$ block. For each output degree $r$, replace it by its full symmetrization $\operatorname{Sym}_r h=\frac1{r!}\sum_{\pi\in S_r}h(x_{\pi(1)},\ldots,x_{\pi(r)})$. This preserves smoothness and compact support, and its field evaluation is unchanged because both the product $\prod_{j=1}^r\phi(x_j)$ and the product integration measure are invariant under permutations. The resulting symmetric coefficient therefore represents each summand in $\mathcal P_{\mathrm{reg}}(X)$. [A1, F1, F2, F3, construct]

2.1 If $F$ and $G$ have degrees $m$ and $n$, then $F^{(k)}=0$ for $k>m$ and $G^{(k)}=0$ for $k>n$. Hence only $0\le k\le\min(m,n)$ contribute; the sum is finite, independent of a coefficient presentation by [F1], and belongs to $\mathcal P_{\mathrm{reg}}(X)[\eta]$. [step 1.1, F1, algebra]

2.2 For $f\in\mathcal D(X)$, define the auxiliary formal generator by
$E_f(s,\phi):=\sum_{m\ge0}s^m\ell_f(\phi)^m/m!$ in the formal power-series
ring; it is not asserted to be an element of $\mathcal P_{\mathrm{reg}}(X)$.
For a zero-constant formal series $Z$, $\exp Z$ means $\sum_{r\ge0}Z^r/r!$,
with all equalities interpreted coefficientwise. The $k$-th derivative of
$E_f$ in $\phi$ is $s^k f^{\otimes k}E_f$. Substitution into the finite
coefficient formula gives, coefficientwise in $s,t,\eta$,
$$ E_f(s)\star_W E_g(t)=\exp\!\bigl(\eta st W(f,g)\bigr)E_{sf+tg}. $$ [F1, F2, step 1.1, algebra]

3.1 Applying step 2.2 twice, both bracketings of three generators equal $$ \exp\!\bigl(\eta(stW(f,g)+srW(f,h)+trW(g,h))\bigr)E_{sf+tg+rh}, $$ by bilinearity of $W$. Comparing coefficients of $s,t,r$ proves associativity for powers of linear functionals. For distinct tests in one input, replace $f$ by $\sum_{j=1}^m s_jf_j$ in the same coefficientwise identity; its coefficient of $s_1\cdots s_m$ is the symmetrized product $\ell_{f_1}\cdots\ell_{f_m}$. Make this substitution independently in each of the three inputs. Thus the associator vanishes for every symmetrized elementary tensor-product coefficient kernel and for their finite sums. [step 2.2, algebra]

4.1 By [F1], symmetrized finite product-test kernels are dense in every coefficient test space. Each fixed coefficient of the associator is a finite sum of compositions of continuous tensor-distribution pairings from [F2] and smooth parameter pairings from [F3], hence is continuous in the coefficient kernels. Passing to the limits of the product-test approximants from the preceding coefficient comparison proves associativity for arbitrary $F,G,H\in\mathcal P_{\mathrm{reg}}(X)$. [F1, F2, F3, step 3.1, algebra]

5.1 For linear functionals only $k=0,1$ occur. The $k=0$ term cancels in the commutator, while the $k=1$ terms are $\eta W(f,g)$ and $\eta W(g,f)$; this gives the displayed commutator. If $W$ is Hermitian, conjugating each finite contraction reverses its two variable groups and gives $(F\star_W G)^*=G^*\star_W F^*$. [F1, F2, step 2.1, algebra] ∎
