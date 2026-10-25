---
id: ex-the-two-vertex-klr-polynomial-representation
kind: example
title: "The two-vertex KLR polynomial representation"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-klr-grading-and-diagrammatic-composition, thm-polynomial-representation-of-a-klr-algebra, thm-klr-pbw-basis-theorem, thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.3, Proposition 2.3 and its proof, printed pp. 15-22: the explicit two-colour action with the orientation conventions and the factor $(x_k+x_{k+1})$ on the oriented side; §3.1, printed pp. 35-38: the relation $[P_{ij}]=[P_{ji}]$ for $i\cdot j=0$.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§3, Proposition 6 and Corollary 7 with proof, printed pp. 12-14: the cases $i\cdot j=0$ and $i\cdot j<0$ of the categorical Serre isomorphisms.'
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2.2, Proposition 3.12, printed pp. 24-26: the two-colour divided-difference action via the factorization $Q_{ij}=P_{ij}(u,v)P_{ji}(v,u)$ and its faithfulness.'
---

## Example

Take $I=\{i,j\}$, $n=2$ and the KLR datum with $Q_{ij}=1$ if $a_{ij}=0$ and $Q_{ij}(u,v)=u+v$ if $a_{ij}=a_{ji}=-1$ (simply-laced edge, hence $d_i=d_j$), $Q_{ji}$ determined by (Q2). Then $I^{\alpha_i+\alpha_j}=\{ij,ji\}$ and the PBW basis of $R(\alpha_i+\alpha_j)$ is $\{x_1^ax_2^b\tau_1^\varepsilon e(\nu)\ :\ \varepsilon\in\{0,1\},\ \nu\in\{ij,ji\}\}$, so $R(\alpha_i+\alpha_j)$ is free of rank $4$ over $k[x_1,x_2]$ (and rank $2$ over the direct-sum polynomial algebra with its two idempotents) with graded dimension $\frac{2(1+q^{-b_{ij}})}{(1-q^{2d_i})(1-q^{2d_j})}$.
(a) $a_{ij}=0$: $\tau_1^2=e(ij)+e(ji)$ and $\tau_1x_1=x_2\tau_1$ and $\tau_1x_2=x_1\tau_1$; right multiplication by $\tau_1$ gives a degree-zero isomorphism $R(\alpha_i+\alpha_j)e(ij)\cong R(\alpha_i+\alpha_j)e(ji)$ of graded left modules, hence $[P_{ij}]=[P_{ji}]$ in $K_0(R)$ — the categorical form of $\theta_i\theta_j=\theta_j\theta_i$.
(b) $a_{ij}=-1$: choose the factorization $P_{ij}(u,v)=u+v$, $P_{ji}(u,v)=1$; the polynomial action of [[thm-polynomial-representation-of-a-klr-algebra]] is
$$\tau_1\bigl(fe(ij)\bigr)=(x_1+x_2)f(x_2,x_1)e(ji),\qquad \tau_1\bigl(fe(ji)\bigr)=f(x_2,x_1)e(ij),$$
so $\tau_1^2=(x_1+x_2)$ on both components, i.e. $\tau_1^2e(\nu)=Q_{\nu_1\nu_2}(x_1,x_2)e(\nu)$; the algebra is free of rank $2$ over the two-idempotent polynomial algebra $k[x_1,x_2]e(ij)\oplus k[x_1,x_2]e(ji)$ (rank $4$ over the bare $k[x_1,x_2]$), and the three-strand divided-power classes satisfy $[P_{iji}]=[P_{i(2)j}]+[P_{ji(2)}]$ in $K_0(R)$, the simply-laced Serre relation at $a_{ij}=-1$.

## Facts & Assumptions

**Given:** The two-vertex KLR datum with $a_{ij}=a_{ji}\in\{0,-1\}$, $d_i,d_j$ (equal on an edge), and the algebra $R(\alpha_i+\alpha_j)$ of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] with the polynomial representation of [[thm-polynomial-representation-of-a-klr-algebra]] and the PBW basis of [[thm-klr-pbw-basis-theorem]].

[F1] Relations (4) and (6) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]: $\tau_1^2e(\nu)=Q_{\nu_1\nu_2}(x_1,x_2)e(\nu)$ and the dot slides, with $\tau_1^2=Q_{ij}$ read on $e(ij)$ and $Q_{ji}$ on $e(ji)$.

[F2] Polynomial action ([[thm-polynomial-representation-of-a-klr-algebra]]): with a factorization $Q_{ij}(u,v)=P_{ij}(u,v)P_{ji}(v,u)$ the action on unequal colours is $\tau_1(fe(\nu))=P_{\nu_1\nu_2}(x_2,x_1)s_1(f)e(s_1\nu)$, and this action is faithful; a factorization with both factors nonzero exists.

[F3] PBW basis ([[thm-klr-pbw-basis-theorem]]): the monomials $\tau_1^\varepsilon x_1^ax_2^be(\nu)$, $\varepsilon\in\{0,1\}$, $\nu\in\{ij,ji\}$, form a $k$-basis of $R(\alpha_i+\alpha_j)$.

[F4] Serre relation for the Grothendieck ring ([[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]]): in $K_0(R)$ the divided classes satisfy $\sum_{a+b=-a_{ij}+1}(-1)^a[P_{i,a}][P_{j,1}][P_{i,b}]=0$, which at $a_{ij}=-1$ reads $[P_{iji}]=[P_{i(2)j}]+[P_{ji(2)}]$.

## Verification

**Proof technique:** direct; read off the two-strand PBW basis and check both parameter cases.

1.1 (Two-strand basis and dimension.) In weight $\alpha_i+\alpha_j$ the sequences are $ij$ and $ji$, and $S_2=\{1,s_1\}$, so the PBW basis [F3] consists of the four families $x_1^ax_2^be(ij)$, $x_1^ax_2^b\tau_1e(ij)$, $x_1^ax_2^be(ji)$, $x_1^ax_2^b\tau_1e(ji)$, which is rank $4$ over $k[x_1,x_2]$; grouping by idempotent gives rank $2$ over $k[x_1,x_2]e(ij)\oplus k[x_1,x_2]e(ji)$. The graded dimension is the two geometric series for the dots in degrees $2d_i,2d_j$ in each corner plus the crossing contributions: in the $ij$-corner, $\tau_1e(ij)$ has degree $-b_{ij}$, and in the $ji$-corner $\tau_1e(ji)$ has degree $-b_{ji}=-b_{ij}$, giving $\frac{1+q^{-b_{ij}}}{(1-q^{2d_i})(1-q^{2d_j})}$ in each corner, total $\frac{2(1+q^{-b_{ij}})}{(1-q^{2d_i})(1-q^{2d_j})}$. [given, F3, algebra]

1.2 (Case $a_{ij}=0$.) Here $Q_{ij}=1$ is a nonzero constant with $Q_{ji}=1$, so [F1] gives $\tau_1^2e(ij)=e(ij)$ and $\tau_1^2e(ji)=e(ji)$, i.e. $\tau_1^2=e(ij)+e(ji)$, and the dot slides $\tau_1x_1=x_2\tau_1$, $\tau_1x_2=x_1\tau_1$ (distinct colours). Right multiplication by $\tau_1$ is an isomorphism of graded left modules $R(\alpha_i+\alpha_j)e(ij)\to R(\alpha_i+\alpha_j)e(ji)$ with inverse right multiplication by $\tau_1$ on the other side: both composites are $\tau_1^2=\mathrm{id}$ on the respective corners, and the map is degree-zero because $\deg\tau_1=-b_{ij}=0$. Hence $[P_{ij}]=[R(\alpha_i+\alpha_j)e(ij)]=[R(\alpha_i+\alpha_j)e(ji)]=[P_{ji}]$ in $K_0(R)$. [given, F1, algebra]

2.1 (Case $a_{ij}=-1$.) With $P_{ij}=u+v$, $P_{ji}=1$ we have $P_{ij}(u,v)P_{ji}(v,u)=(u+v)\cdot1=Q_{ij}(u,v)$, a valid factorization with both factors nonzero, so [F2] applies: $\tau_1(fe(ij))=(x_1+x_2)f(x_2,x_1)e(ji)$ and $\tau_1(fe(ji))=1\cdot f(x_2,x_1)e(ij)$. Applying twice, $\tau_1^2(fe(ij))=(x_1+x_2)f$ and $\tau_1^2(fe(ji))=(x_1+x_2)f$, so $\tau_1^2e(\nu)=Q_{\nu_1\nu_2}(x_1,x_2)e(\nu)$ on both summands, as required by [F1]. The freeness statements are step 1.1. For the Serre relation, apply [F4] with $a_{ij}=-1$: the sum runs over $a+b=2$ with signs $+,-,+$, i.e. $[P_{i,2}][P_j]-[P_{i,1}][P_j][P_{i,1}]+[P_j][P_{i,2}]=0$, which in the divided-word notation is $[P_{i(2)j}]-[P_{iji}]+[P_{ji(2)}]=0$, i.e. $[P_{iji}]=[P_{i(2)j}]+[P_{ji(2)}]$. [step 1.1, F2, F4, algebra] ∎
