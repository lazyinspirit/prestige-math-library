---
id: lem-root-skein-surgery-kirby-color-invariance
kind: lemma
title: "Root Kirby-color handle-slide and blow-up invariance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - def-semisimplified-temperley-lieb-fusion-category
  - lem-root-fusion-rules-and-simple-object-completeness
  - def-extended-skein-cobordism-anomaly-data
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free in the finite color calculations; full AC is carried separately by the surgery-presentation theorem that consumes this result."
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Three-Manifold Invariants Derived from the Kauffman Bracket, Topology 31 (1992), §§2–4"
      url: "https://www.sciencedirect.com/science/article/pii/004093839290002Y"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 8 and 12"
      url: "https://www.jstor.org/stable/j.ctt1bgzb7v"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"
---

## Statement

Fix even $p\ge4$, a primitive $2p$-th root $A$, the BHMV semisimplified category, and its quantum dimensions $d_j$ and twists $\theta_j$ for $0\le j\le r-2$. Put $\Omega_p=\sum_{j=0}^{r-2}d_jp_j$, $\Delta_+=\sum_jd_j^2\theta_j$, and $\Delta_-=\sum_jd_j^2\theta_j^{-1}$. The Statement asserts that both $\Delta_+$ and $\Delta_-$ are nonzero. For a finite integral framed link $L$ in the oriented three-sphere, color each surgery component by $\Omega_p$ and normalize the bracket evaluation by $\Delta_+^{b_+(L)}\Delta_-^{b_-(L)}$, where $b_\pm(L)$ are the positive and negative indices of the framing matrix. With the stated BHMV root and weighted anomaly convention, the resulting value is unchanged under framed isotopy, handle slides, and addition or deletion of a split $\pm1$-framed unknot.

## Statement references

[[def-sl-two-root-of-unity-skein-parameter|Root, coefficient, and loop conventions]]

[[def-semisimplified-temperley-lieb-fusion-category|Simple projectors and category convention]]

[[lem-root-fusion-rules-and-simple-object-completeness|Fusion dimensions and twists]]

[[def-extended-skein-cobordism-anomaly-data|Weighted anomaly normalization]]

[Blanchet, Habegger, Masbaum, and Vogel, *Three-Manifold Invariants Derived from the Kauffman Bracket*, §§2–4](https://www.sciencedirect.com/science/article/pii/004093839290002Y)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 8 and 12](https://www.jstor.org/stable/j.ctt1bgzb7v)

[Pohorence, *3-manifold Invariants and TQFTs*, §3.1](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** The root parameter, the semisimplified category, its simple projectors, quantum dimensions, twist, and a finite integral framed surgery link.

[F1] [[def-sl-two-root-of-unity-skein-parameter]] fixes $p$, $A$, $r$, $\delta$, and $\mathbb C$.

[F2] [[def-semisimplified-temperley-lieb-fusion-category]] defines the quotient and the root-specific projectors.

[F3] [[lem-root-fusion-rules-and-simple-object-completeness]] supplies the resolved finite simple list, dimensions, twists and invertible Hopf-link matrix in the registered root/pivotal convention. Its accepted interface is reused, not its body.

[F4] [[def-extended-skein-cobordism-anomaly-data]] fixes the weighted Lagrangian composition and the selected sixth root $\kappa$.

[F5] **External input — actual BHMV Kirby color and Gauss units.** BHMV, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, Topology34(1995), §2 p.897, the displayed definition of $\theta_p$ and equations(*)–(**), together with §5.8 p.913: for the primitive $2p$-th root and even $p=2r$, the Kirby element is $\Omega_p=\sum_{j=0}^{r-2}d_jp_j$ and
$$\Delta_\varepsilon=\eta^{-1}\kappa^{3\varepsilon}\quad(\varepsilon=\pm1),\qquad \eta\in\mathbb C^\times.$$
Here $\kappa$ is the selected BHMV SIXTH root from [F4], not the square-root weight parameter used by some later sources. The source's usual signed quantum dimensions are exactly $d_j=[j+1]$ for the registered negative-loop recurrence. Its recalled invariant $\theta_p(S^3(L))=\langle L(\Omega_p)\rangle/(\Delta_+^{b_+}\Delta_-^{b_-})$ includes the actual Kirby handle-slide identity. This established identity is imported, not claimed as a new local recoupling proof.

[F6] **External input — weighted normalization and exact sign.** BHMV §2 pp.897–898 and Gilmer–Masbaum, arXiv:0912.4706v3, §2 pp.4–6 and §11 pp.23–25, give the weighted version. Put $\nu=\kappa^3$; one weight step multiplies the map by $\nu$. The closed TQFT normalization is $Z_p(M,w)=\eta^{b_0(M)+b_1(M)}\nu^w\theta_p(M)$, componentwise with the banded data. It is this additional normalization, not raw $\theta_p$ alone, that supplies the finite TQFT. Gilmer–Masbaum's Maslov form on $(L_1+L_2)\cap L_3$ is $(a_1+a_2)\odot(b_1+b_2)=\omega(a_2,b_1)$. Modulo its radical it is the negative of the registered Wall form $\omega(a,b')$ with $a+b+c=0$. Thus their correction $-\mu_{GM}$ is precisely the registered $+\mu_{Wall}$. Their square-root parameter is $\nu$, explicitly the cube of BHMV's parameter. No choice of an unrelated square root $\mathcal D_p$ is silently identified with $\eta^{-1}$; only $\mathcal D_p^2=\eta^{-2}$ follows.

## Proof

**Given:** The data in the Statement.

1.1 The label set is finite, so $\Omega_p$ is a finite linear combination of colored projectors. The normalized surgery expression is therefore a finite complex number whenever the displayed Gauss sums are nonzero. [F1, F2, given, construct]

2.1 By [F5], both Gauss sums are units, since $\eta$ and $\kappa$ are units. Framed isotopy preserves the ribbon bracket. The imported Kirby-color identity preserves its value under a handle slide, while the framing matrix changes by an integral congruence and hence has unchanged positive and negative indices. A split signed-unit unknot multiplies the numerator by $\Delta_\varepsilon$ and increases exactly the corresponding index by one. The denominator therefore cancels that factor. Deletion is the inverse operation. This proves the displayed surgery invariance with the exact normalization of the Statement. [F1, F2, F3, F5, step 1.1, algebra]

3.1 The weighted interpretation is [F6]: the signature unit is $\nu=\kappa^3$, with the source's Maslov sign converted to the registered Wall order. The distinct additional $\eta^{b_0+b_1}$ normalization is retained when these closed values enter the TQFT pairing; no anomaly-free ordinary-oriented functor follows. The finite color and cancellation calculations add no choice assumption. [F4, F5, F6, step 2.1, algebra] ∎

