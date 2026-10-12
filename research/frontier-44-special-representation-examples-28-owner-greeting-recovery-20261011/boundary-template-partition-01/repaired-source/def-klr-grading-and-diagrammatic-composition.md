---
id: def-klr-grading-and-diagrammatic-composition
kind: definition
title: "The KLR grading and the diagrammatic multiplication"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-graded-ring-module-bimodule-and-internal-shift, def-kac-moody-root-lattice-height-and-positive-cone]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§4.1.1, printed p. 27: the graded category $B^\bullet$ with $\deg x_s=2d_s$ and $\deg\tau_{st}=-b_{st}$; §3.2.4, printed pp. 28-29: $\deg x_{i,\nu}=\nu_i\cdot\nu_i$, $\deg\tau_{i,\nu}=-\nu_i\cdot\nu_{i+1}$.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.1, printed pp. 5-9: dot and crossing moves; §2.2, printed pp. 10-15: $\deg(\partial_a)=-2$ and $\deg(x_a)=2$ in the nil-Hecke normalization.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§2.11, printed pp. 21-23: $\deg(e(\nu))=0$, $\deg(x_k(\nu))=2d_{\nu_k}$, $\deg(\tau_t(\nu))=-(\alpha_{\nu_t}\mid\alpha_{\nu_{t+1}})$.'
---

## Definition

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]. Assign degrees $\deg e(\nu):=0$, $\deg x_a:=(\alpha_{\nu_a}\mid\alpha_{\nu_a})=2d_{\nu_a}$ and $\deg\tau_a:=-(\alpha_{\nu_a}\mid\alpha_{\nu_{a+1}})=-b_{\nu_a\nu_{a+1}}$ in the presentation; then every relation (1)-(7) is homogeneous (## Verification), so $R_n(Q)=\bigoplus_{m\in\mathbb Z}R_n(Q)_m$ is a $\mathbb Z$-graded unital associative $k$-algebra with $R_n(Q)_m=\bigoplus_{\nu,\eta\in I^n}e(\nu)R_n(Q)_me(\eta)$, and each $R(\beta)=\bigoplus_mR(\beta)_m$ is a graded subalgebra ([[def-graded-ring-module-bimodule-and-internal-shift]]). Equivalently, the weight refinement by $Q_+$ is available: the idempotent $e(\nu)$ carries weight $\sum_a\alpha_{\nu_a}$, and $x_a$ and $\tau_a$ are weight-preserving operators of the displayed scalar degrees.

**Diagram dictionary.** Read a planar diagram bottom to top. A local dot on strand $a$ is $x_a$, a crossing of strands $a,a+1$ is $\tau_a$, the identity is the collection of straight diagrams $e(\nu)$, and vertical concatenation of diagrams with matching bottom labels $\nu$ and top labels $s_{a_r}\cdots s_{a_1}\nu$ is the algebra product: in $ab$ the diagram for $b$ is placed below the diagram for $a$, matching operator composition. Isotopies of the plane that do not change the combinatorial type act as the identity, and the local relations (2.3)-(2.8) of Khovanov–Lauda I (quadratic relation, dot-sliding over a crossing, and the braid relation) are exactly relations (4), (6) and (7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]. In particular the degree of a monomial equals the sum of the individual dot degrees plus the signed sum of the crossing degrees, and a dot contributes $(\alpha_{\nu_a}\mid\alpha_{\nu_a})=2d_{\nu_a}$, while a crossing contributes $-b_{\nu_a\nu_{a+1}}$.

All grading shifts on this page are the internal shifts of [[def-graded-ring-module-bimodule-and-internal-shift]], $(M\{r\})_m=M_{m-r}$, and $q$ acts on graded Grothendieck groups by $q[P]=[P\{1\}]$.

## Facts & Assumptions

**Given:** A KLR datum $Q$ and the presented algebra $R_n(Q)$ of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] with its relations (1)-(7), together with the degree assignment $\deg e(\nu)=0$, $\deg x_a=2d_{\nu_a}$, $\deg\tau_a=-b_{\nu_a\nu_{a+1}}$ and the symmetric matrix $b_{ij}=d_ia_{ij}$ with $b_{ii}=2d_i>0$ of [[def-kac-moody-root-lattice-height-and-positive-cone]].

[F1] The relation list of the KLR algebra: relations (1)-(7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], including the symmetry $b_{ij}=b_{ji}$ and $b_{ii}=2d_i$.

[F2] The parameter conditions (Q1)-(Q4) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], in particular (Q3): $Q_{ij}$ is homogeneous of total degree $-2b_{ij}$ for $\deg u=2d_i$, $\deg v=2d_j$.

## Verification

**Proof technique:** direct; check homogeneity of each defining relation for the displayed degree assignment and then transfer it to the quotient.

1.1 Relation (1) has degree $0$ on both sides, and in (2) the identity $x_ae(\nu)=e(\nu)x_a$ has degree $2d_{\nu_a}$ while $x_ax_b=x_bx_a$ has degree $2d_{\nu_a}+2d_{\nu_b}$ on the $\nu$-component; relation (3) has degree $-b_{\nu_a\nu_{a+1}}=-b_{\nu_{a+1}\nu_a}$ on both sides by the symmetry of $b$ from [F1]. [given, F1, algebra]

2.1 Relation (4) is homogeneous of degree $-2b_{\nu_a\nu_{a+1}}$: the left side $\tau_a^2e(\nu)$ has degree $2(-b_{\nu_a\nu_{a+1}})$, and the right side $Q_{\nu_a\nu_{a+1}}(x_a,x_{a+1})e(\nu)$ has degree $-2b_{\nu_a\nu_{a+1}}$ by [F2], since a monomial $u^rv^s$ of $Q_{ij}$ contributes $r(2d_i)+s(2d_j)$. [step 1.1, F1, F2, algebra]

2.2 Relations (5) and (6) are homogeneous with their actual label-dependent degrees. In far crossing commutation, both products have degree $-b_{\nu_a\nu_{a+1}}-b_{\nu_b\nu_{b+1}}$ because the disjoint crossings interchange the same two color pairs. A far dot move has degree $2d_{\nu_b}-b_{\nu_a\nu_{a+1}}$ on both sides, as its untouched strand keeps the dot color. For adjacent unequal colors, dot sliding likewise preserves the degree of the crossing plus the transported dot. For equal colors $i$, the dot degree is $2d_i$ and the crossing degree is $-2d_i$, so both terms of $\tau_ax_a-x_{a+1}\tau_a=e(\nu)$ and $\tau_ax_{a+1}-x_a\tau_a=-e(\nu)$ have degree $0$, equal to the degree of the idempotent on the right. Thus every dot and far-crossing relation is homogeneous, without asserting that its common degree is always zero. [step 1.1, F1, algebra]

3.1 Relation (7), unequal outer colours: for colours $(\nu_a,\nu_{a+1},\nu_{a+2})=(a',b',c')$ both braid words are sums of terms each moving the same three crossings over the same three pairs, so each has degree $-b_{a'b'}-b_{a'c'}-b_{b'c'}$, and the right side is $0$; on the equal-outer-colour case $(i,j,i)$ each braid word has the same degree $-2b_{ij}-2d_i$, while the correction numerator has degree $-2b_{ij}$ and its division by $x_{a+2}-x_a$, of degree $2d_i$, lowers the degree to $-2b_{ij}-2d_i$; for three equal colours $Q_{ii}=0$ and the ordinary nil-Hecke braid relation is homogeneous of degree $-6d_i$. [step 2.2, F1, F2, algebra]

4.1 Every defining relation is homogeneous, so the two-sided ideal they generate is a graded ideal of the free algebra, and the quotient $R_n(Q)$ inherits a $\mathbb Z$-grading with $R_n(Q)_m=\bigoplus_{\nu,\eta}e(\nu)R_n(Q)_me(\eta)$; the weight refinement is inherited because each generator preserves the weight $\sum_a\alpha_{\nu_a}$ and each relation is weight-homogeneous, and $R(\beta)=e(\beta)R_{|\beta|}(Q)e(\beta)$ is a graded subalgebra for every $\beta\in Q_+$. [step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎
