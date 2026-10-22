---
id: lem-four-squares-suffice-for-hermitian-signature-kernel-bound
kind: lemma
title: Four-square representation suffices for the hermitian signature kernel bound
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-primitive-element-theorem-for-finite-separable-extensions]
proof_strategy: direct
sources:
  references:
    - title: N. W. Stoltzfus, Algebraic Computations of the Integral Concordance and Double Null Concordance Group of Knots, printed page 281, Theorem 2.14
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/stoltzfus2.pdf
---

## Statement

Let $F$ be a number field and assume that every nonzero element positive at every real embedding of $F$ is a sum of four squares in $F$. When $F$ has no real embeddings this assumption applies to every nonzero element. Let $E/F$ be a quadratic field extension with its nontrivial involution. Then the kernel of all hermitian signatures in the hermitian Witt group $W(E/F)$ is killed by $4$. Independently of the four-square assumption, the joint signature image is a subgroup of a finite power $\mathbb Z^s$, and is free abelian of rank at most $s$. Here signatures are indexed by real embeddings of $F$ at which $E$ becomes $\mathbb C$.

## Statement references

[[thm-primitive-element-theorem-for-finite-separable-extensions]]

## Facts & Assumptions

**Given:** The fields and four-square assumption in the statement. Write $E=F(\sqrt d)$, with $d\in F^\times$ nonsquare. A hermitian form is linear in its first coordinate and conjugate-linear in its second; nonsingularity is assumed. Metabolic means possessing a totally isotropic subspace of half the dimension over the coefficient field.

[F1] A finite separable field extension has a primitive element. [[thm-primitive-element-theorem-for-finite-separable-extensions]]

[A1] Every nonzero element of $F$ positive at all its real embeddings is a sum of four squares in $F$. This is an explicit hypothesis, not a proved number-field theorem in this donor.

## Proof

1.1 First, $F$ is dense in the product of its $r$ real completions. Indeed, characteristic zero makes the extension separable (an irreducible polynomial has nonzero derivative of smaller degree, so is coprime to it). By [F1], choose a primitive element $\theta$ for $F/\mathbb Q$, with distinct real images $\theta_1,\ldots,\theta_r$. The real matrix with entries $\theta_i^{j-1}$ for $1\le i,j\le r$ is invertible by its Vandermonde determinant. Thus the evaluation map from real polynomial coefficients of degree below $r$ onto $\mathbb R^r$ is surjective. Its image on rational coefficients is dense, since $\mathbb Q^r$ is dense and an invertible real linear map preserves density. Such rational polynomials evaluated at $\theta$ belong to $F$. The same assertion holds coordinatewise on $F^n$; it is vacuous for $r=0$. [given, F1, construct, algebra]

1.2 For a nonsingular hermitian form $g$ over $E/F$, define $q_g(v)=g(v,v)$ on its underlying $F$-space. We prove directly that metabolicity of $q_g$ implies metabolicity of $g$. Let $m=\dim_E g$, and let $U$ be an $F$-Lagrangian for $q_g$, of dimension $m$. If $m>0$, any nonzero $v\in U$ satisfies $g(v,v)=0$. The $E$-line $P=Ev$ is totally isotropic and has $F$-dimension $2$. Use the polar bilinear form $B$ of $q_g$. The $B$-orthogonal complement of the underlying $F$-space $P$ is exactly the hermitian orthogonal complement: orthogonality to both $v$ and $\sqrt d\,v$ forces both $F$-coordinates of $g(x,v)$ to vanish. The polar form is nonsingular and $U^\perp=U$. The pairing map $P\to U^*$ therefore has kernel $P\cap U$, so its rank is $2-\dim_F(P\cap U)$. Transposition gives $$\dim_F(U\cap P^\perp)=m-2+\dim_F(P\cap U).$$ Consequently $((U\cap P^\perp)+P)/P$ is an isotropic subspace of $P^\perp/P$ of dimension $m-2$, exactly half the quadratic dimension $2m-4$. The induced hermitian form on $P^\perp/P$ is nonsingular of $E$-dimension $m-2$, and its underlying quadratic form is therefore metabolic. Induct on $m$; dimension $1$ cannot occur, since $\langle a\rangle$ has $q_g(x)=a x\bar x\ne0$ for $x\ne0$. Lifting the hermitian Lagrangian from the quotient and adjoining $P$ gives an $E$-Lagrangian of $g$. This proves the implication without an arithmetic premise or cancellation theorem. [given, construct, algebra]

2.1 Let $q$ be any nonsingular quadratic form over $F$ whose signature is zero at every real embedding and whose dimension is even. Diagonalization follows by repeatedly splitting a vector of nonzero value and taking its orthogonal complement; if every vector had zero value, polarization would make the bilinear form zero. If the dimension is positive and $r>0$, the zero-signature hypothesis makes the real form indefinite at every real embedding. Choose a vector of positive value at each embedding. Continuity and step 1.1 give a vector over $F$ with value $a$ positive at every real embedding. Split off its line. Its complement has at least one negative direction at every real embedding, so the same argument gives a vector in that complement of value $b$ negative at every real embedding. Splitting off this second line leaves a nonsingular form of zero signature everywhere and dimension two less. Iterating yields an orthogonal decomposition into pairs $\langle a_i,b_i\rangle$ with $-b_i/a_i$ totally positive. If $r=0$, diagonalize and pair entries arbitrarily; the same positivity assertion is vacuous. [step 1.1, construct, algebra]

3.1 By [A1], write $-b_i/a_i$ as a sum of four squares. The matrix $R$ with columns $(x_1,x_2,x_3,x_4)^t$, $(-x_2,x_1,x_4,-x_3)^t$, $(-x_3,-x_4,x_1,x_2)^t$, and $(-x_4,x_3,-x_2,x_1)^t$ satisfies $R^tR=(-b_i/a_i)I_4$ by direct column multiplication. Hence $(-b_i)I_4$ is isometric to $a_iI_4$. Four copies of $\langle a_i,b_i\rangle$ are therefore isometric to $a_iI_4\perp(-a_i)I_4$, a metabolic form with isotropic subspace $\{(x,x):x\in F^4\}$. Taking sums over the pairs of step 2.1 proves that $4q$ is metabolic. [A1, step 2.1, construct, algebra]

4.1 For a hermitian form $h$ on $V$, put $q_h(v)=h(v,v)\in F$ on the underlying $F$-space. Hermitian forms diagonalize by the same orthogonal splitting argument: if all diagonal values vanished, evaluating on $v+w$ would give $h(v,w)+\overline{h(v,w)}=0$, and evaluating on $v+c w$ for $c\ne\bar c$ would then give $h(v,w)=0$, contradicting nonsingularity. Thus if $h=\langle a_1,\ldots,a_m\rangle$, then $$q_h=\mathop{\perp}_{i=1}^m\langle a_i,-d a_i\rangle.$$ In particular $q_h$ is nonsingular. At a real place with $d>0$ every displayed pair is hyperbolic. At a real place with $d<0$, its signature is twice the hermitian signature. Therefore if all hermitian signatures vanish, $q_h$ has signature zero at every real place and step 3.1 makes $q_{4h}=4q_h$ metabolic. [step 3.1, construct, algebra]

5.1 Apply step 1.2 to $g=4h$ in step 4.1. It follows that $4h$ is metabolic, proving the claimed kernel bound. Signature is an additive integer invariant and vanishes on metabolic hermitian forms: after extension to $\mathbb C/\mathbb R$, the dimension of an isotropic subspace is at most each of the two indices, so a half-dimensional isotropic subspace forces equal indices. The number $s$ of relevant real places is finite, so the joint signature defines a homomorphism to $\mathbb Z^s$ and its image is a subgroup. Every subgroup $H\le\mathbb Z^s$ is free of rank at most $s$: induct on $s$, project onto the first coordinate, and, when its nonzero image is $n\mathbb Z$ with $n>0$ least positive, choose one preimage $x$ of $n$. Every element subtracts a unique integral multiple of $x$ to lie in the projection kernel, giving $H=\mathbb Z x\oplus\ker$, to which induction applies. If the image is zero, apply induction directly to $H\le\mathbb Z^{s-1}$. This last argument uses no [A1] and proves the unconditional image assertion. [step 4.1, step 1.2, construct, algebra] ∎

## Remarks

The missing arithmetic obligation is exactly the removal of [A1] for arbitrary number fields. Neither rational Lagrange four squares nor approximation at real embeddings establishes [A1]. Stoltzfus's printed page 281 states Landherr's exact sequence without supplying its proof; that statement is not used as a logical premise here. This donor is a conditional reduction and cannot by itself supply the unconditional hermitian kernel bound required by the algebraic concordance classification.
