---
id: lem-biextension-kummer-compatibility-by-local-splittings
kind: lemma
title: "Kummer compatibility from local splittings of a biextension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-etale-fppf-topology-comparison-and-cohomology-models
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Appendix C, discussion following C.4 and Corollary C.5, printed p. 319; local splitting proof with explicit signs supplied here."
verification: {}
---

## Statement

Assume AC and DC. Work on the big fppf site of a field $F$, with supplied sheaf-cohomology models and the usual torsor and connecting-map conventions. Let $A,B$ be abelian sheaves, $n\geq1$, and suppose multiplication by $n$ is an epimorphism on each. Let $W$ be a supplied rigidified biextension of $(A,B)$ by $\mathbf G_m$: a $\mathbf G_m$-torsor on $A\times B$ with two commutative extension laws, compatible by interchange, and their compatible identity trivializations on the axes. No existence assertion about a Poincare biextension is part of the hypotheses. Write $N_Aw$ for the $n$-fold sum in the $A$ direction and $N_Bw$ for the $n$-fold sum in the $B$ direction.

For $t\in A[n]$ and $z\in B[n]$, choose a local section $w\in W(t,z)$ and define
$$e_n(t,z)=N_Aw/(N_Bw).$$
Both numerator and denominator are scalars by the axis trivializations. This defines a bilinear sheaf pairing $A[n]\times B[n]\to\mu_n$. Use its composite into $\mathbf G_m$ for cup products. For $a\in A(F)$ let $E_a=W(a,-)$ be the extension of $B$ by $\mathbf G_m$; define $b_W(a,d)\in H^2(F,\mathbf G_m)$ to be its connecting map applied to $d\in H^1(F,B)$. Define $c_W(q,c)$ using the extension $W(-,q)$ of $A$ in exactly the same way. If $\delta_A,\delta_B$ are the Kummer maps and $i_A,i_B$ are induced by the inclusions of the kernels, then
$$\delta_A(a)\cup_{e_n} y=b_W(a,i_B y),\qquad x\cup_{e_n}\delta_B(q)=c_W(q,i_A x)$$
for every $x\in H^1(F,A[n])$, $y\in H^1(F,B[n])$, $a\in A(F)$ and $q\in B(F)$.

For any homomorphism $\iota:H^2(F,\mathbf G_m)\to\mathbb Q/\mathbb Z$, apply the same $\iota$ to all three pairings. The two displayed identities remain true. In particular this operation adds no sign or scalar when $\iota$ is a fixed normalized local invariant. The assertion is valid without $n$ being invertible in $F$ and asserts no perfection, finiteness, topology, or Galois comparison.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

## Facts & Assumptions

**Given:** The supplied data and conventions in the Statement.

[A1] AC and DC are retained from the route. No additional choice principle is asserted. ([[def-axiom-of-choice]], [[def-dependent-choice]])

[A2] Use supplied models for right-derived sheaf cohomology on the fixed site. A torsor represented by a degree-one Cech cocycle has its usual class in $H^1$; Cech degree-two classes map naturally to $H^2$. The connecting obstruction for an extension is represented by the product of lifts on a triple overlap, and the cup of degree-one cocycles $u,v$ for a bilinear pairing $e$ is represented by $e(u_{ij},v_{jk})$. These are the explicit cohomology-model conventions of this lemma; no general Cech-to-derived isomorphism in degree two is assumed. ([[def-etale-fppf-topology-comparison-and-cohomology-models]])

[A3] The two laws, axis trivializations and interchange identity are supplied biextension data. Multiplication by $n$ on both sheaves is locally surjective. Here $N_A,N_B$ always mean partial group sums, whereas division by a scalar means the torsor action.

## Proof

**Proof technique:** construct a splitting after a local division of a point, calculate its change on overlaps, and compute the transposition coboundary.

**Given:** [A1]–[A3] and all data in the Statement. On overlaps all sections are pulled back to the common test scheme before an operation is performed. We use $u_{ik}=u_{ij}+u_{jk}$ for additive degree-one cocycles and $(dh)_{ijk}=h_{jk}h_{ik}^{-1}h_{ij}$ for scalar degree-one cochains.

1.1 Let $a'$ be any local section of $A$, put $a=na'$, and let $z\in B[n]$. For a local $w\in W(a',z)$, $N_Aw$ belongs to $W(a,z)$, and $N_Bw$ belongs to $W(a',0)$ and hence is a scalar. Thus $s_{a'}(z):=(N_Aw)/(N_Bw)$ belongs to $W(a,z)$. Replacing $w$ by $\lambda w$ multiplies each partial sum by $\lambda^n$, so this expression is unchanged. Local torsor sections exist by [A3]; independence makes these expressions glue, including on refinements, to an actual sheaf map $s_{a'}:B[n]\to E_a$. Interchange implies that $N_A$ respects sums in the $B$ direction. Multiplication by $n$ in the commutative extension over fixed $a'$ is a homomorphism, so $N_B$ respects these sums too. Their quotient is therefore a homomorphism, and the identity trivialization gives $s_{a'}(0)=1$. It is a splitting of the restriction of $E_a$ to $B[n]$. [A3, given, construct, algebra]

2.1 Interchange gives additivity in the other variable as well: for local $a',a''$ and $z\in B[n]$, choose $w\in W(a',z)$ and $w'\in W(a'',z)$. Their sum in the $A$ direction is in $W(a'+a'',z)$. Its $N_A$ is the sum of the respective $N_A$ values; its $N_B$, by interchange, is the product of the respective scalar $N_B$ values. Consequently $s_{a'+a''}(z)=s_{a'}(z)+_A s_{a''}(z)$, where $+_A$ denotes the partial law. For $t\in A[n]$, $s_t$ takes values in $W(0,-)$, so it is precisely the scalar $e_n(t,-)$ in the Statement. It is bilinear by these two additivity calculations. Since $nz=0$ and $s_t$ is a homomorphism, $e_n(t,z)^n=e_n(t,nz)=1$. In particular, when $t\in A[n]$, $s_{a'+t}(z)=e_n(t,z)s_{a'}(z)$. This also proves independence of all local choices in the stated definition of $e_n$. [A3, step 1.1, construct, algebra]

3.1 Fix $a\in A(F)$ and represent $y$ by a $B[n]$-torsor cocycle $y_{ij}$. Refine its trivializing cover to one on which $a$ has local divisions $a'_i$; this is possible by [A3]. Set $t_{ij}=a'_j-a'_i$, the cocycle for $\delta_A(a)$. A lift in $E_a$ of the $B$-cocycle $y_{ij}$ is $\ell_{ij}=s_{a'_i}(y_{ij})$. On a triple overlap step 2.1 gives $s_{a'_j}(y_{jk})=e_n(t_{ij},y_{jk})s_{a'_i}(y_{jk})$. Since $s_{a'_i}$ is a homomorphism and $y_{ik}=y_{ij}+y_{jk}$, the scalar obstruction $\ell_{ij}+_B\ell_{jk}-_B\ell_{ik}$ equals $e_n(t_{ij},y_{jk})$. By [A2] this is both the connecting obstruction defining $b_W(a,i_B y)$ and the cocycle for $\delta_A(a)\cup_{e_n}y$. Equality of the actual cocycles implies equality in $H^2$, without any degree-two Cech comparison isomorphism. The construction respects refinement, and changing lifts changes the obstruction by a scalar coboundary. Thus the equality holds for the stated sheaf-cohomology classes. [A2, A3, step 1.1, step 2.1, construct, algebra]

4.1 Transpose the biextension, so its first variable is $B$ and second is $A$. Its finite pairing is $e_n^T(z,t)=N_Bw/(N_Aw)=e_n(t,z)^{-1}$. Apply step 3.1 to the transposed object to obtain $c_W(q,i_Ax)=\delta_B(q)\cup_{e_n^T}x$. To compute the sign directly, represent $x,\delta_B(q)$ by cocycles $x_{ij},z_{ij}$ and set $h_{ij}=e_n(x_{ij},z_{ij})$. Bilinearity and the two cocycle identities give $(dh)_{ijk}=e_n(x_{ij},z_{jk})^{-1}e_n(x_{jk},z_{ij})^{-1}$. The product of the cocycle for $x\cup_{e_n}z$ and the inverse of the cocycle for $z\cup_{e_n^T}x$ is therefore $(dh)^{-1}$. Their classes are equal. This proves the second required identity with a plus sign in both displayed compatibilities: inversion from transposing the finite pairing cancels the interchange sign of the two degree-one classes. [A2, step 2.1, step 3.1, algebra]

5.1 Applying a homomorphism $\iota$ preserves the equalities in steps 3.1 and 4.1. The calculation uses only local division in the specified topology and sheaf-torsor descent, so remains valid for nonreduced kernels and $n$ divisible by the field characteristic. For $n=1$ the kernels and both sides are zero. In particular it proves the two compatibility identities for any supplied Poincare biextension whose point-versus-torsor pairings are defined by these extension boundaries, using the finite pairing with the explicit ratio convention above and the same local invariant on each side. No duality or comparison theorem has entered the argument. [A2, A3, step 3.1, step 4.1, algebra] ∎

## Remarks

The biextension and cohomology conventions are inputs, not concealed existence conclusions. To use a different definition of the canonical pairing (for example a derived-biextension construction), identify it with these extension boundaries. Likewise identify its chosen Cartier evaluation with the ratio convention for $e_n$, or invert all affected conventions consistently. This lemma does not infer that identification from abstract Cartier duality alone. It establishes the formal compatibility needed by the recorded local Tate route once these construction interfaces are supplied.
