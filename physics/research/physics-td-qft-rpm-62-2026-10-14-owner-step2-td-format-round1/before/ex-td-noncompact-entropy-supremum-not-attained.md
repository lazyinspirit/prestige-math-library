---
id: ex-td-noncompact-entropy-supremum-not-attained
kind: example
title: A concave entropy supremum not attained on an open energy-partition set
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An abstract two-system model with positive thermodynamic coordinates, fixed total energy, volume, and composition, and an open feasible energy-partition set; no real-material claim.
deps: [def-td-equilibrium-state-domain, def-td-thermal-contact-constraints, def-td-isolated-compound-feasible-set, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, post-td-concave-fundamental-entropy, post-td-bulk-additivity, post-td-entropy-maximum, thm-of-archimedean, lem-finite-set-has-max, def-complete-ordered-field]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-thermal-contact-constraints: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-bulk-additivity: physical-assumption
  post-td-entropy-maximum: physical-assumption
  thm-of-archimedean: mathematical-premise
  lem-finite-set-has-max: mathematical-premise
  def-complete-ordered-field: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.9, equilibrium and stability
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.3–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 7
---

## Example

Take two independent separated one-species systems $A$ and $B$ with material constitutions $c_A,c_B$ inside an isolated compound. Write $D_A:=D_{c_A}$ and $D_B:=D_{c_B}$ for their equilibrium domains; each is $(0,\infty)^3$ in the dimensionless coordinates $(\hat U_i,\hat V_i,\hat n_i)$ of [[def-td-equilibrium-state-domain]], and each full domain is designated as an open single-phase chart. Fix positive volumes and amounts $\hat V_A,\hat V_B,\hat n_A,\hat n_B$, total internal energy $U_A+U_B=1\,\mathrm J$, and a thermal-contact protocol that permits internal energy transfer while keeping volumes and amounts fixed, as in [[def-td-thermal-contact-constraints]]. The admitted separated-pair set $\mathcal C_{AB}$ of [[post-td-bulk-additivity]] includes every pair in the following feasible set:

$$\phi(x)=((x,\hat V_A,\hat n_A),(1-x,\hat V_B,\hat n_B)),\qquad \mathcal F=\{\phi(x):0<x<1\}\subseteq\mathcal C_{AB}\subseteq D_A\times D_B.$$

Thus $x=\hat U_A=U_A/(1\,\mathrm J)$ and $1-x=\hat U_B=U_B/(1\,\mathrm J)$. With $s_*=1\,\mathrm{J\,K^{-1}}$, adopt the toy constitutive entropies $S_A=2s_*\hat U_A$ and $S_B=s_*\hat U_B$. They are finite, continuous, affine (hence concave), $C^2$, and have positive $S_U$ on the stated open domains. For each $\lambda>0$, use the same formula in the own coordinates of the distinct tags $c_A^{(\lambda)}$ and $c_B^{(\lambda)}$. Then the coordinate scaling $\delta_\lambda$ of [[post-td-bulk-additivity]] gives $S_{c_A^{(\lambda)}}(\delta_\lambda x_A)=\lambda S_A(x_A)$ and $S_{c_B^{(\lambda)}}(\delta_\lambda x_B)=\lambda S_B(x_B)$. Their additive total on $\mathcal F$ is $S_{\mathrm{tot}}(\phi(x))=s_*(1+x)$. The model-declared feasible set is an open energy-partition interval, so its entropy has a finite supremum but no attained maximum. This is a conditional model example, not a claim about a real material.

## Facts & Assumptions

**Given:** The equilibrium-coordinate convention of [[def-td-equilibrium-state-domain]], the contact restrictions of [[def-td-thermal-contact-constraints]], the feasible-set definition [[def-td-isolated-compound-feasible-set]], and the entropy and equilibrium-maximum postulates.

[F1] Each adopted entropy is a finite scalar measured in $\mathrm{J\,K^{-1}}$ ([[post-td-concave-fundamental-entropy]]).

[F2] On every specified convex region the entropy is continuous and satisfies the stated Jensen concavity inequality ([[post-td-concave-fundamental-entropy]]).

[F3] The admitted separated pairs form a designated subset $\mathcal C_{AB}\subseteq D_A\times D_B$ ([[post-td-bulk-additivity]]).

[F4] Under the composition map, the dimensioned total energy of an admitted pair is $U_{A\sqcup B}=U_A+U_B$ ([[post-td-bulk-additivity]]).

[F5] For admitted independent separated macroscopic systems, entropy is additive under the composition map ([[post-td-concave-fundamental-entropy]]).

[F6] The tagged bulk family scales its extensive coordinates by $\lambda>0$, and the entropy postulate assumes $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$ ([[post-td-bulk-additivity]], [[post-td-concave-fundamental-entropy]]).

[F7] An equilibrium feasible set may be noncompact and need not contain an entropy maximizer ([[def-td-isolated-compound-feasible-set]]).

[F8] Stable equilibrium in this route requires an attained global maximum on the exact feasible set ([[post-td-entropy-maximum]]).

[L1] For every real $t$ there is a natural number $n\ge1$ with $t<n$ ([[thm-of-archimedean]]).

[L2] The range of every nonempty finite list of real numbers has a greatest member ([[lem-finite-set-has-max]]).

[L3] On $\mathbb R^6$, the Euclidean norm is defined by the sum of coordinate squares and induces the usual Euclidean metric ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L4] A real number $u$ is the supremum of a set $E\subseteq\mathbb R$ exactly when it is an upper bound of $E$ and $u\le v$ for every upper bound $v$ of $E$ ([[def-complete-ordered-field]]).

[A1] $D_A=D_B=(0,\infty)^3$ in dimensionless $(\hat U,\hat V,\hat n)$ coordinates, with each full domain designated as an open single-phase chart; $\hat V_A,\hat V_B,\hat n_A,\hat n_B>0$ are fixed; total energy is $1\,\mathrm J$; every pair $\phi(x)$ in $\mathcal F=\{\phi(x):0<x<1\}$ is admitted in $\mathcal C_{AB}$; $s_*=1\,\mathrm{J\,K^{-1}}$; and $S_A=2s_*\hat U_A$, $S_B=s_*\hat U_B$, with the same formulas on each tagged scaled copy.

[A2] Compactness uses the inherited Euclidean topology: every cover of $\mathcal F$ by relatively open subsets must have a finite subcover.

## Verification

**Given:** The model [A1], the compactness convention [A2], facts [F1]–[F8], and [L1]–[L4].

1.1 Each entropy in [A1] is finite, affine and continuous on the convex domain $(0,\infty)^3$, hence concave; it is $C^2$ with $S_{A,U}=2\,\mathrm{K^{-1}}$ and $S_{B,U}=1\,\mathrm{K^{-1}}$. Scaling every extensive coordinate by $\lambda$ scales each entropy by $\lambda$, and the admitted separated-system total is their sum. The pairs in [A1] are admitted by [F3], their fixed total energy uses the composition rule [F4], the separated entropy is the sum by [F5], and the tagged scaling is homogeneous by [F6]. Thus the model satisfies [F1]–[F6]. [given, A1, F1, F2, F3, F4, F5, F6, algebra]

1.2 For each integer $n\ge2$, put $\mathcal U_n=\{\phi(x)\in\mathcal F:x<1-1/n\}$. It is relatively open: if $\phi(x)\in\mathcal U_n$, then $\epsilon=1-1/n-x>0$, and any $\phi(y)\in\mathcal F$ with $\|\phi(y)-\phi(x)\|_2<\epsilon$ has coordinate difference $\phi(y)-\phi(x)=(y-x,0,0,-(y-x),0,0)$. By [L3], $\|\phi(y)-\phi(x)\|_2=\sqrt2|y-x|$, so $|y-x|<\epsilon$ and $y<1-1/n$. Given any $x\in(0,1)$, [L1] applied to $1/(1-x)>1$ gives an integer $n>1/(1-x)$; then $n\ge2$ and $x<1-1/n$, so the $\mathcal U_n$ cover $\mathcal F$. For any nonempty finite subfamily with indices $n_1,\ldots,n_k$, [L2] gives a greatest index $N$, and its union is $\mathcal U_N$. The feasible state $\phi(1-1/(2N))$ belongs to $\mathcal F$ but not $\mathcal U_N$, so this cover has no finite subcover. By [A2] and [F7], $\mathcal F$ is noncompact and has no assumed attainment guarantee. [given, A1, A2, F7, L1, L2, L3, algebra]

2.1 For every $x\in(0,1)$, the entropy value is $S_{\mathrm{tot}}(\phi(x))=s_*(1+x)<2s_*$ because $s_*>0$. Thus $2s_*$ is an upper bound of the feasible entropy values. [given, A1, step 1.1, algebra]

2.2 Given any $\varepsilon>0$, apply [L1] to $2+s_*/\varepsilon$ to choose $n\in\mathbb N$ with $n>2+s_*/\varepsilon$. Then $x_n:=1-1/n\in(0,1)$ and
$$0<2s_*-S_{\mathrm{tot}}(\phi(x_n))=s_*/n<\varepsilon.$$
Hence feasible entropy values lie arbitrarily close to $2s_*$ from below. [given, A1, L1, step 1.1, algebra]

2.3 Let $u$ be any upper bound of the feasible entropy values. If $u<2s_*$, set $d:=2s_*-u>0$ and apply [L1] to $2+s_*/d$ to choose $n\in\mathbb N$ with $n>2+s_*/d$. Then $x:=1-1/n\in(0,1)$ and $S_{\mathrm{tot}}(\phi(x))=2s_*-s_*/n>2s_*-d=u$, contradicting that $u$ is an upper bound. Therefore $2s_*\le u$ for every upper bound $u$. By [L4], $\sup\{S_{\mathrm{tot}}(\phi(x)):0<x<1\}=2s_*$. [given, A1, L1, L4, step 1.1, algebra]

3.1 For every $x\in(0,1)$, $y=(x+1)/2$ also lies in $(0,1)$ and satisfies $y>x$. Hence $S_{\mathrm{tot}}(\phi(y))=s_*(1+y)>s_*(1+x)=S_{\mathrm{tot}}(\phi(x))$ because $s_*>0$. No feasible state maximizes entropy; the supremum $2s_*$ is not attained because $x=1$ is excluded. [given, A1, step 1.1, algebra]

3.2 By [F8] stable equilibrium in this route requires an attained global maximum on the exact feasible set. Since no maximum is attained, this model has no stable equilibrium under that criterion. [F8, step 3.1] ∎
