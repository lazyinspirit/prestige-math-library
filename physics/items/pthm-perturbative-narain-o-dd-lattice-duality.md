---
id: pthm-perturbative-narain-o-dd-lattice-duality
kind: physics-theorem
title: Perturbative Narain O Dd Lattice Duality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - pthm-exact-closed-string-circle-t-duality
  - post-free-torus-zero-mode-conformal-weights
dependency_roles:
  pthm-exact-closed-string-circle-t-duality: physical-result
  post-free-torus-zero-mode-conformal-weights: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Zero-mode conformal-weight preservation for a flat free torus sigma model with constant positive-definite dimensionless metric and constant B-field under integral O(d,d) lattice automorphisms; no CFT operator/cocycle, OPE, sewing, or nonperturbative U-duality result."
sources:
  references:
    - title: "A. Giveon, M. Porrati, and E. Rabinovici, Target Space Duality in String Theory, arXiv:hep-th/9401139v1"
      url: "https://arxiv.org/pdf/hep-th/9401139v1"
      locator: "§2.4, equations (2.4.11)–(2.4.24), PDF pp. 20–22: the even self-dual momentum-winding lattice, generalized moduli matrix, and O(d,d) action."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.1, equations (2.4)–(2.8), PDF pp. 9–11: the d=1 momentum-winding lattice and radius-inversion normalization."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $d\ge1$, use angular torus coordinates of period $2\pi$, a constant positive-definite dimensionless metric $G=G^T$, and a constant antisymmetric two-form $B=-B^T$. Set $E=G+B$, $Z=(m,n)\in\mathbb Z^d\oplus\mathbb Z^d$ with $m$ winding and $n$ momentum, and $\eta=\begin{pmatrix}0&I_d\\I_d&0\end{pmatrix}$. Adopt the free-torus zero-mode prescription of [F2], with
$$
\mathcal M(E)=\begin{pmatrix}G-BG^{-1}B&BG^{-1}\\-G^{-1}B&G^{-1}\end{pmatrix},\qquad h_0=\tfrac14(Z^T\mathcal M(E)Z+Z^T\eta Z),\qquad \bar h_0=\tfrac14(Z^T\mathcal M(E)Z-Z^T\eta Z).
$$
Write $g=\begin{pmatrix}a&b\\c&d_0\end{pmatrix}$ in $d\times d$ blocks and assume $g\in O(d,d;\mathbb Z)$, meaning $g$ is integral and $g^T\eta g=\eta$. If $F:=cE+d_0$ is invertible, transform the moduli and charge vector by $E'=(aE+b)F^{-1}$ and $Z'=g^{-T}Z$. Then $G':=(E'+E'^T)/2$ is positive definite, $B':=(E'-E'^T)/2$ is antisymmetric, and the momentum-winding lattice $\Gamma^{(d,d)}=(\mathbb Z^{2d},\eta)$ is even unimodular of signature $(d,d)$. The transformation preserves the two bilinear contributions defining $h_0$ and $\bar h_0$, so it preserves the perturbative free-torus zero-mode conformal weights. This conditional lattice statement does not establish an oscillator-state map, compact-boson operator algebra, cocycles, OPE locality, partition-function/sewing equivalence, full CFT equivalence, or nonperturbative U-duality.

## Statement references

[Giveon, Porrati, and Rabinovici, §2.4](https://arxiv.org/pdf/hep-th/9401139v1)

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.1](https://arxiv.org/pdf/hep-th/9602052v2)

## Facts & Assumptions

**Given:** An integer $d\ge1$, angular torus coordinates of period $2\pi$, the adopted free zero-mode prescription for a flat torus, constant dimensionless $G=G^T>0$ and $B=-B^T$, integer winding/momentum vector $Z=(m,n)\in\mathbb Z^d\oplus\mathbb Z^d$, and a matrix $g\in O(d,d;\mathbb Z)$ for which $cE+d_0$ is invertible.

[F1] [[pthm-exact-closed-string-circle-t-duality]]: in the $d=1$ zero-mode sector, radius inversion exchanges the integer momentum/winding labels, preserves $p_L^2,p_R^2$ after the right-moving reflection, and fixes the normalization $h_0=\alpha'p_L^2/4$, $\bar h_0=\alpha'p_R^2/4$.

[F2] [[post-free-torus-zero-mode-conformal-weights]]: in the stated angular-coordinate convention, $E=G+B$, $\mathcal M(E)=\begin{pmatrix}G-BG^{-1}B&BG^{-1}\\-G^{-1}B&G^{-1}\end{pmatrix}$, and the adopted zero-mode weights are $h_0=\frac14(Z^T\mathcal M(E)Z+Z^T\eta Z)$ and $\bar h_0=\frac14(Z^T\mathcal M(E)Z-Z^T\eta Z)$.

[F3] The lattice bilinear form is $\eta=\begin{pmatrix}0&I_d\\I_d&0\end{pmatrix}$, $O(d,d;\mathbb Z)$ means integer matrices $g$ with $g^T\eta g=\eta$, and the moduli matrix is $E=G+B$.

## Proof

1.1 Put $T=\begin{pmatrix}I&0\\-B&I\end{pmatrix}$ and $D=\operatorname{diag}(G,G^{-1})$. Direct block multiplication gives $\mathcal M(E)=T^TDT$. The matrix $T$ is a real O$(d,d)$ $B$-shift because $T^T\eta T=\eta$; since it is invertible, this also gives $T\eta T^T=\eta$. Also $D\eta D=\eta$. Hence $\mathcal M(E)$ is symmetric and $\mathcal M(E)\eta\mathcal M(E)=T^TD(T\eta T^T)DT=T^T\eta T=\eta$. Since $G$ and $G^{-1}$ are positive definite and $T$ is invertible, $x^T\mathcal M(E)x=(Tx)^TD(Tx)>0$ for every nonzero $x$. By [F3], for $Z=(m,n)$ the lattice norm is $Z^T\eta Z=2m\cdot n$, an even integer. The vectors $(v,v)$ and $(v,-v)$ are $+1$ and $-1$ eigenspaces of $\eta$, each of dimension $d$, so its signature is $(d,d)$; $|\det\eta|=1$, so the integral lattice is unimodular. For $d=1$, $B=0$ and [F2] gives $h_0=\tfrac14(Gm^2+G^{-1}n^2+2mn)=\tfrac14(\sqrt Gm+n/\sqrt G)^2$ and $\bar h_0=\tfrac14(Gm^2+G^{-1}n^2-2mn)=\tfrac14(\sqrt Gm-n/\sqrt G)^2$. With $m=w$ and $G=R^2/\alpha'$, these are $\alpha'p_L^2/4$ and $\alpha'p_R^2/4$ for the [F1] momenta. [given, F1, F2, F3, algebra]

2.1 Write $F=cE+d_0$. From $g^T\eta g=\eta$, its block identities include $a^Tc+c^Ta=0$, $b^Td_0+d_0^Tb=0$, and $a^Td_0+c^Tb=I_d$. Expanding $F^T(E'+E'^T)F=(cE+d_0)^T(aE+b)+(aE+b)^T(cE+d_0)$ and using these identities reduces the right side to $E+E^T=2G$: the quadratic coefficient is $c^Ta+a^Tc=0$, the two mixed coefficients are $c^Tb+a^Td_0=I_d$ and $d_0^Ta+b^Tc=I_d$, and the constant coefficient is $d_0^Tb+b^Td_0=0$. Thus $G'=(E'+E'^T)/2=F^{-T}GF^{-1}>0$, while $B'=(E'-E'^T)/2$ is antisymmetric. For the generalized metric define $S(E)=\eta\mathcal M(E)=\begin{pmatrix}-G^{-1}B&G^{-1}\\G-BG^{-1}B&BG^{-1}\end{pmatrix}$. Direct block multiplication using $E=G+B$ gives $S(E)\binom{I}{E}=\binom{I}{E}$, since its upper block is $-G^{-1}B+G^{-1}(G+B)=I$ and its lower block is $G-BG^{-1}B+BG^{-1}(G+B)=G+B=E$. Also $S(E)^2=I$ by $\mathcal M(E)\eta\mathcal M(E)=\eta$ and $\eta^2=I$. Since $\mathcal M(E)$ is positive, a $+1$ eigenvector $v$ of $S(E)$ has $v^T\eta v=v^T\mathcal M(E)v>0$, while a $-1$ eigenvector has $v^T\eta v=-v^T\mathcal M(E)v<0$. The signature $(d,d)$ from step 1.1 therefore makes both eigenspaces dimension $d$; the displayed $d$-dimensional graph of $E$ is exactly the $+1$ eigenspace. The matrix $g$ is invertible because $g^T\eta g=\eta$ with nondegenerate $\eta$, and this identity then also gives $g\eta g^T=\eta$. The O$(d,d)$-congruence $\mathcal M_*:=g\mathcal M(E)g^T$ is positive and obeys $\mathcal M_*\eta\mathcal M_*=\eta$. Its associated involution satisfies $\eta\mathcal M_*=g^{-T}S(E)g^T$ (using $\eta g=g^{-T}\eta$), hence its $+1$ eigenspace is $g^{-T}\operatorname{graph}(E)$. Orthogonality gives $g^{-T}=\begin{pmatrix}d_0&c\\b&a\end{pmatrix}$, so
$$
g^{-T}\binom{I}{E}=\binom{d_0+cE}{b+aE}=\binom{I}{(aE+b)(cE+d_0)^{-1}}(cE+d_0)=\binom{I}{E'}F.
$$
The factorization and generalized-metric identities of step 1.1 apply to $G',B'$ as well, so $\mathcal M(E')$ is a positive symmetric generalized metric; its $+1$ eigenspace is $\operatorname{graph}(E')$ by the same block calculation. The displayed graph identity therefore shows that $\mathcal M_*$ and $\mathcal M(E')$ have the same $+1$ eigenspace. For any positive symmetric generalized metric $M$, the involution $S=\eta M$ is $\eta$-self-adjoint because $S^T\eta=\eta S=M$. If $Sv=v$, then $Mv=\eta v$, and therefore $v^T\eta v=v^TMv>0$; if $Sv=-v$, then $Mv=-\eta v$ and $v^T\eta v=-v^TMv<0$. The two eigenspaces are $\eta$-orthogonal by self-adjointness. Since $\eta$ has signature $(d,d)$, both eigenspaces have dimension $d$; the negative eigenspace is therefore exactly the $\eta$-orthogonal complement of the positive eigenspace. The positive eigenspace thus determines $S$, and then $M=\eta S$, uniquely. It follows that $\mathcal M_*=\mathcal M(E')$. Taking determinants in $g^T\eta g=\eta$ gives $(\det g)^2=1$, so the integral matrix $g$ is unimodular, $g^{-T}$ is an integral lattice automorphism, and $Z':=g^{-T}Z$ is integral. Hence
$$
Z'^T\mathcal M(E')Z'=Z^Tg^{-1}(g\mathcal M(E)g^T)g^{-T}Z=Z^T\mathcal M(E)Z.
$$
[given, F2, F3, step 1.1, algebra]

3.1 Orthogonality also gives $g^{-1}\eta g^{-T}=\eta$, so $Z'^T\eta Z'=Z^T\eta Z$. Together with the generalized-metric quadratic-form identity from step 2.1, the two combinations in [F2] are unchanged separately; thus $h_0'=h_0$ and $\bar h_0'=\bar h_0$. The calculation concerns only the adopted zero-mode lattice prescription; it does not construct a transformation of oscillator states or imply any of the operator-algebra and full-CFT claims excluded in the statement. [given, F2, F3, step 1.1, step 2.1, algebra] ∎

## Remarks

The argument is the lattice matrix calculation only. It supplies no operator cocycles, local-field maps, modular/sewing theorem, global CFT construction, or nonperturbative duality claim.

The following TikZ diagram records the graph-map identity verified by block multiplication in step 2.1. The maps $i_E,i_{E'}:\mathbb R^d\to\mathbb R^{2d}$ are $i_E(u)=(u,Eu)$ and $i_{E'}(u)=(u,E'u)$, and the left arrow is $F=cE+d_0$. Thus commutativity is the equality $g^{-T}i_E=i_{E'}F$; the diagram records the calculation and is not a substitute for its proof.

```tikz
\begin{tikzcd}
\mathbb R^d \arrow[r,"i_E"] \arrow[d,"F"'] & \mathbb R^{2d} \arrow[d,"g^{-T}"] \\
\mathbb R^d \arrow[r,"i_{E'}"'] & \mathbb R^{2d}
\end{tikzcd}
```

