---
id: cor-rt-torus-and-state-dimension-formula
kind: corollary
title: "RT torus operators and the state-space dimension formula"
status: draft
dependency_level: 15
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-pointed-metric-group-ribbon-category, thm-pointed-metric-group-is-modular-iff-radical-trivial, def-modular-ribbon-category-and-hopf-link-data, lem-modular-hopf-matrix-squared, lem-modular-hom-state-spaces-have-exact-sewing-inverses, thm-weighted-rt-tqft-and-factorization, lem-rt-capped-operator-normalization-and-composition, lem-wall-signature-and-rt-cap-reference-correction, lem-maslov-index-four-lagrangian-cocycle, def-axiom-of-choice, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§8.14 and 8.16"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§5.8 and 6.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Assume full AC and its inherited countable-choice consequences. For the weighted RT functor of [[thm-weighted-rt-tqft-and-factorization]] and any complex modular ribbon fusion category, simple labels $i_1,\ldots,i_n$ and genus $g\ge0$,

$$\dim V(\Sigma_g;i_1,\ldots,i_n)=\sum_{x\in I}S_{0x}^{\,2-2g-n}\prod_{r=1}^nS_{i_rx}.$$

No complex conjugation is part of this general formula. The unmarked torus has dimension $|I|$ and basis $b_i:\mathbf1\to i\otimes i^*\subset H$. Orient its meridian/longitude basis $(m,l)$ by $\omega(m,l)=1$ and choose reference and object Lagrangian $\alpha=\lambda=\mathbb Rm$. The weight-zero positive Hopf mapping cylinder and positive core-twist cylinder have respectively the geometric classes

$$s_+=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad t=\begin{pmatrix}1&1\\0&1\end{pmatrix}$$

(columns are the images of $m,l$), and their operators are

$$S_{ji}=s_{ji}/D,\qquad T_{ji}=\delta_{ji}\theta_i.$$

For this positive Hopf/core-twist pair the exact relations are

$$S^2=C,\qquad(ST)^3=\kappa I,\qquad C_{ji}=\delta_{j,i^*}.$$

The inverse Hopf class is $s_-=s_+^{-1}=\left[\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right]$ and its weight-zero operator is $S^{-1}$. That alternative pair satisfies $(S^{-1}T)^3=\kappa C$. These conventions retain the actual positive Hopf and core-twist matrices; replacing a generator by its inverse changes its geometric class. In a nonselfdual category $C$ need not be $I$.

## Facts & Assumptions

**Given:** The modular category, state-space caps, geometric orientation and weighted lifts fixed in the Statement.

[F1] [[def-modular-ribbon-category-and-hopf-link-data]] defines $s,D,\theta$; [[thm-weighted-rt-tqft-and-factorization]] defines $p_+=\sum_i\theta_i d_i^2$ and $\kappa=p_+/D$; [[lem-modular-hopf-matrix-squared]] proves symmetry and $S^2=C$ with the dual-label convention. The full pointed cocycle data and radical criterion are [[def-pointed-metric-group-ribbon-category]] and [[thm-pointed-metric-group-is-modular-iff-radical-trivial]].

[F2] [[lem-modular-hom-state-spaces-have-exact-sewing-inverses]] proves the entire displayed dimension identity directly for the actual Hom state spaces, including zero, one and two marked spheres and all multiplicities.

[F3] [[thm-weighted-rt-tqft-and-factorization]] proves the full weighted functor, geometric sewing and duality. [[lem-rt-capped-operator-normalization-and-composition]] proves the exact torus cap correction $N|_j=d_j$.

[F4] [[lem-wall-signature-and-rt-cap-reference-correction]] proves weight action $\kappa^n$ and composition weight $n_2+n_1+\mu_W(R_1\lambda,\lambda,R_2^t\lambda)$. [[lem-maslov-index-four-lagrangian-cocycle]] defines its sum-zero Walker form $\psi(a,a')=\omega(a_1,a_2')$ and repeated-argument vanishing.

[A1] Full AC and countable choice are inherited exactly from [F3], with [[def-axiom-of-choice]] and [[def-countable-choice]]. The matrix and Maslov calculations below are finite.

## Proof

1.1 Apply [F2] to the actual state space from [F3]. Its separating inverse resolves every simple summand and multiplicity, and its nonseparating inverse resolves $H$; hence it identifies the geometrically factored space with exactly the Hom space used in [F2]'s dimension calculation. The displayed formula holds for all $g,n$, including the exceptional spheres by [F2]. At $g=1,n=0$ every summand is $1$, giving $|I|$. The summand $\operatorname{Hom}(\mathbf1,i\otimes i^*)$ has basis $b_i$ by rigidity and simplicity, so these are a basis of the unmarked torus space. [F1, F2, F3, given, algebra]

2.1 Fix the standard oriented solid torus $D^2\times S^1$, with $m$ the positive disk-boundary and $l$ the core direction. Its boundary orientation is $(m,l)$. The reference opposite-cap reflection acts on this basis by $r=\operatorname{diag}(1,-1)$. The positive Hopf gluing exchanges the meridian of one cap with the longitude of the other; its two disk-core orientations give the exchange matrix $\left[\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right]$. Removing the fixed opposite reflection gives the stated $s_+$, since $rs_+$ is that exchange matrix. This fixes which Hopf generator is meant and its linking orientation. In particular $m\mapsto-l$, $l\mapsto m$, rather than the inverse convention. In the capped matrix coefficient use the composition-dual test $y_j=r_j/d_j$ because $r_jb_j=d_j$. The positive Hopf graph with these two coupons evaluates to $s_{ji}/d_j$. Its closed empty-surgery normalization is $D^{-1}$ and its outgoing torus correction from [F3] is $d_j$, giving exactly $S_{ji}=s_{ji}/D$. The positive core twist is the actual solid-torus map $(z,e^{i\phi})\mapsto(e^{i\phi}z,e^{i\phi})$, so $m\mapsto m$, $l\mapsto l+m$ and its core normal disk makes one positive full rotation. Its ribbon operator is therefore $\theta_i$ on the $i$ summand with no off-diagonal terms. The cylinder Gram inverse cancels as in [F3], leaving exactly $T$. When $\lambda=\alpha$, both terms of the correction $a(R;\lambda,\alpha)$ vanish by repeated arguments in [F4], so these really are the weight-zero matrices, not unspecified scalar multiples. [F1, F3, F4, step 1.1, construct]

3.1 Put $A=s_+t=\left[\begin{smallmatrix}0&1\\-1&-1\end{smallmatrix}\right]$. Direct multiplication gives $A^3=I$ and $s_+^2=-I$. Composing the weight-zero $s_+,t$ lifts introduces no weight because $t^{-1}\alpha=\alpha$, so its Maslov triple has a repeated argument. Thus $ST$ is the weight-zero lift of $A$. For its square the middle triple is $(A\alpha,\alpha,A^{-1}\alpha)=(\mathbb Rl,\mathbb Rm,\mathbb R(l-m))$. A sum-zero vector is $(-c l,c m,c(l-m))$, and its Walker form is $\omega(-c l,c'm)=cc'$, so this Maslov index is $+1$. For its third power the first and third lines coincide: $A^2\alpha=A^{-1}\alpha$. The next correction is zero. Therefore the cubed weighted lift is $(I,1)$ and [F4]'s positive weight action gives $(ST)^3=\kappa I$. Similarly the correction in $s_+s_+$ is $\mu(l,m,l)=0$, so its operator is the weight-zero $-I$ lift, equal to $S^2=C$ by [F1]. These are geometric weighted relations, not an appeal to the desired modular matrix identity. [F1, F3, F4, step 2.1, algebra]

4.1 The weight-zero inverse lift of $s_+$ is $s_-=s_+^{-1}$: its inverse-composition correction has repeated first and third lines, so is zero. Its operator is consequently $S^{-1}$ by functoriality. Set $B=s_-t=-A$. It has exactly the same action as $A$ on Lagrangian lines, hence the same accumulated cube weight $+1$, while $B^3=-I$. Its cubed operator is therefore $\kappa Z(-I,0)=\kappa C$, proving the asserted inverse-generator alternative. All matrix entries, dualities and Maslov signs use the fixed orientation from step 2.1; an orientation or inverse change cannot be hidden in a projective-scalar phrase. For example take the actual pointed data $G=\mathbb Z/3$, $\omega=1$, $r(a,b)=\zeta^{ab}$, $q(a)=\zeta^{a^2}$ and pivotal identity. Bilinearity verifies both hexagons, and $q(a+b)=q(a)q(b)\zeta^{2ab}$ verifies balancing; $q(-a)=q(a)$ and the duality snakes hold with unit evaluation/coevaluation. The induced pivotal identity gives all dimensions1, since the Drinfeld scalar $\zeta^{-a^2}$ times the twist is1. Its bicharacter $\zeta^{2ab}$ has zero radical, so [F1] makes this an actual nonselfdual modular category. It has $S_{ab}=\zeta^{2ab}/\sqrt3$, $T_{aa}=\zeta^{a^2}$ and $\kappa=(1+2\zeta)/\sqrt3$. Finite multiplication in $\mathbb Q[\zeta,\sqrt3]$ gives $(ST)^3=\kappa I$ and $(S^{-1}T)^3=\kappa C$, where $C$ exchanges labels1 and2 and is not $I$. This corroborates the convention-sensitive general proof; the exact arithmetic diagnostic is recorded in the owner packet. The proof uses no positivity or selfduality assumption. [F1, F3, F4, A1, step 2.1, step 3.1, algebra] ∎
