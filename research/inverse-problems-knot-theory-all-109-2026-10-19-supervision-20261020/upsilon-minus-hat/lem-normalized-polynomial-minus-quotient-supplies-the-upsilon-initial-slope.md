---
id: lem-normalized-polynomial-minus-quotient-supplies-the-upsilon-initial-slope
kind: lemma
title: Normalized polynomial minus quotient supplies the Upsilon initial slope
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - def-knot-floer-filtration-and-tau
  - def-upsilon-function-from-filtered-complex
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Livingston, Notes on the knot concordance invariant Upsilon
      url: https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf
      locator: Initial-slope argument; the polynomial quotient and lifting algebra are supplied below
---

## Statement

Use the normalized doubly pointed knot complex with coefficients in $\mathbb F_2$. Put $R=\mathbb F_2[U]$, $\Lambda=\mathbb F_2[U,U^{-1}]$, and let $C^-$ be its finite free polynomial complex on the basis at algebraic level zero. Its differential retains every disk with nonnegative $n_z$, with coefficient $U^{n_w}$, Maslov loss one and Alexander loss $n_z$. Thus $M(Ux)=M(x)-2$, $i(Ux)=i(x)-1$ and $j(Ux)=j(x)-1$. Its total hat quotient is $\widehat C=C^-/UC^-$, including all terms with $n_w=0$, and has homology $\mathbb F_2$ in absolute Maslov degree zero.

Then $H(C^-)=R$ with generator in degree zero. There are homogeneous $R$-linear maps $p:C^-\to R$, $q:R\to C^-$ and $h:C^-\to C^-$ of degrees zero, zero and one, satisfying $pq=1$ and $qp+\partial h+h\partial=1$. These are finite polynomial maps; they are not asserted to preserve Alexander filtration. They descend to the hat quotient and extend to $C=C^-\otimes_R\Lambda$, with the same homotopy identities and normalized homology generators.

Give $\widehat C$ the Alexander filtration of its $i=0$ terms, and let $\tau$ be the least level supporting its nonzero degree-zero homology class. Among Maslov-zero cycles of $C^-$ representing its top generator, the least possible maximum Alexander coordinate of the $i=0$ terms is exactly $\tau$. Consequently, for all sufficiently small $t\ge0$, the finite Laurent minimax for $F_t=(1-t/2)i+(t/2)j$ satisfies $\nu_t=t\tau/2$ and $\Upsilon(t)=-t\tau$.

The polynomial model here is the normalized doubly pointed one. For multipointed grids, the chosen-variable restriction equivalence supplies this same model. Simultaneously setting all ordinary variables equal instead retains the prescribed auxiliary $V$ factors and is not identified here with a rank-one minus or hat model.

## Statement references

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|Accepted full normalized analytic and grid interface]]

[[def-knot-floer-filtration-and-tau|Hat threshold convention]]

[[def-upsilon-function-from-filtered-complex|Laurent minimax convention]]

## Facts & Assumptions

[F1] The normalized doubly pointed finite polynomial complex, its all-$n_z\ge0$ differential, its normalized total hat quotient, and the chosen-variable restriction comparison are the accepted full interface of [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]]. Its simultaneous ordinary-variable collapse instead has $V^{\otimes(k-1)}$, with auxiliary bidegrees $(0,0)$ and $(-1,-1)$. No auxiliary factor is discarded.

[F2] The hat threshold uses the inherited Alexander filtration and its degree-zero total homology generator. [[def-knot-floer-filtration-and-tau]] The finite Laurent minimax uses the normalized Maslov-zero generator and $\Upsilon=-2\nu_t$. [[def-upsilon-function-from-filtered-complex]]

## Proof

**Given:** The actual normalized polynomial complex in [F1], with its finite homogeneous basis $x_r$ at $i=0$, and $a_r=j(x_r)$, $m_r=M(x_r)$.

1.1 Multiplication by $U$ is injective on chains, and reduction modulo $U$ is exactly the displayed total hat quotient. A differential term $U^a y$ survives precisely when $a=n_w=0$; its Alexander coordinate is $j(x)-n_z$, so positive $n_z$ terms remain and lower the quotient filtration. Keeping only $n_z=0$ would instead form an associated graded complex, whose homology is not the total hat homology used here. The degreewise exact sequence gives $H_{k+2}(C^-)\xrightarrow{U}H_k(C^-)\to H_k(\widehat C)\to H_{k+1}(C^-)$. All chain groups vanish above the maximum of the finitely many $m_r$. For $k>0$, the middle hat group is zero, so descending from that upper bound proves $H_k(C^-)=0$. At $k=0$ the exact sequence identifies $H_0(C^-)$ with $\mathbb F_2$, since both neighboring minus groups vanish. At $k=-1$ it gives $H_{-1}(C^-)=0$. For every $k<0$, multiplication by $U$ from degree $k+2$ to degree $k$ is an isomorphism: its adjacent hat groups have degrees $k+1$ and $k$, both nonzero only potentially at $k=-1$, where its source is already zero. Thus the full homology is $R$ generated in degree zero, with no torsion, and reduction identifies its top generator with the hat generator. [F1, given, algebra]

2.1 For completeness the tower has actual polynomial chain homotopies. If the differential matrix modulo $U$ has a nonzero entry, its homogeneous polynomial coefficient is exactly one. Select the corresponding homogeneous basis elements $a,b$ and replace $b$ by $\partial a$; its old $b$ coefficient is one, so this is an invertible homogeneous polynomial basis change. For every remaining basis vector $x$ subtract from it the $b$ coefficient of $\partial x$ times $a$. Its new differential has no $b$ coefficient; applying $\partial^2=0$ then shows it has no $a$ coefficient either. The pair $Ra\to Rb$, $a\mapsto b$, splits off as an actual direct summand. Its contraction sends $b$ to $a$ and $a$ to zero. Each cancellation removes two basis vectors and reduces the dimension of the quotient complex by a contractible pair. After finitely many cancellations its differential modulo $U$ is zero. The remaining quotient homology is still one-dimensional in degree zero, so the remaining polynomial module has one basis vector of degree zero and zero differential. Composing the finitely many inclusions, projections and contractions gives the stated $p,q,h$. Every coefficient is polynomial; every map preserves the algebraic submodule. No Alexander-filtered contraction has been inferred. Tensoring the actual identities with $R/(U)$ or with $\Lambda$ preserves them term by term, without any flatness claim for $R/(U)$. In particular localization identifies the polynomial top generator with the Laurent normalized generator. [F1, step 1.1, construct, algebra]

3.1 A normalized degree-zero minus cycle projects to the degree-zero hat generator by step 1.1. Conversely choose any degree-zero hat cycle representing that generator and lift it to a degree-zero polynomial chain $c$ using just the $i=0$ basis terms. Since its quotient differential is zero, $\partial c=Ud$ for a polynomial chain $d$ of Maslov degree one. Injectivity of multiplication by $U$ and $\partial^2=0$ give $\partial d=0$. Step 1.1 gives $H_1(C^-)=0$, so $d=\partial e$ for a polynomial chain $e$ of degree two. Therefore $z=c+Ue$ is a polynomial cycle and has exactly the same $i=0$ terms as $c$. Its hat class is the generator, so its minus class is the top generator. The correction is finite and has $i\le-1$; no bound on its lower-level Alexander terms is necessary. The two directions prove that the least maximum $j$ among the leading $i=0$ terms of normalized minus cycles equals precisely the hat threshold $\tau$. A normalized minus cycle always has some $i=0$ term: otherwise it would be $Uw$ for a degree-two polynomial cycle $w$, whose homology vanishes. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 The Maslov-zero chain group of $C$ is finite-dimensional over $\mathbb F_2$: each even-$m_r$ basis vector contributes only its unique Laurent translate $U^{m_r/2}x_r$, and each odd-$m_r$ basis vector contributes none. Thus there are finitely many normalized representing cycles. No such cycle has maximum $i$ below zero, by step 3.1 and the polynomial tower inclusion. At least one has maximum $i=0$. At $t=0$ a cycle with maximum $i\ge1$ is separated from every such zero-level cycle by at least one; continuity of their finitely many affine maxima gives a common positive interval on which none can minimize. In each zero-level cycle, every term with $i<0$ is strictly below its $i=0$ terms at $t=0$. Finiteness of all these terms gives another common positive interval on which only the $i=0$ terms determine its maximum. On that interval its filtration is exactly $t/2$ times their maximum $j$. Minimizing and using step 3.1 yields $\nu_t=t\tau/2$ and $\Upsilon(t)=-t\tau$, hence the asserted right derivative. This proves the original small-$t$ operation with the polynomial quotient, absolute top generator and all positive-$n_z$ terms retained. [F2, step 2.1, step 3.1, construct, algebra] ∎
