---
id: thm-number-field-hasse-minkowski-in-zf
kind: theorem
title: Number-field Hasse–Minkowski theorem in ZF
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-quadratic-hasse-norm-principle-in-zf, lem-quadratic-idelic-first-inequality-in-zf, lem-local-quadratic-norm-and-square-class-preparations, thm-number-field-finite-weak-approximation-in-zf, lem-number-field-completion-tensor-and-norm-in-zf]
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Class Field Theory, VIII section 3, Propositions 3.7–3.8 and Theorem 3.5
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

A nonsingular quadratic form over a number field is isotropic over that field if and only if it is isotropic over every completion. This holds in ZF without a choice principle.

## Statement references

[[thm-quadratic-hasse-norm-principle-in-zf]]

[[lem-quadratic-idelic-first-inequality-in-zf]]

[[lem-local-quadratic-norm-and-square-class-preparations]]

[[thm-number-field-finite-weak-approximation-in-zf]]

[[lem-number-field-completion-tensor-and-norm-in-zf]]

## Facts & Assumptions

**Given:** A number field $F$ and a nonsingular quadratic form $q$ over $F$. Isotropic means having a nonzero zero vector.

[F1] A quadratic field-extension norm is global exactly when it is a norm at every completion. [[thm-quadratic-hasse-norm-principle-in-zf]]

[F2] A nontrivial quadratic number-field extension has infinitely many nonsplit primes. [[lem-quadratic-idelic-first-inequality-in-zf]]

[F3] Squares are open in finite local fields, and a unit of odd residue characteristic with square residue has a square root by the proved Newton iteration. [[lem-local-quadratic-norm-and-square-class-preparations]]

[F4] Finite simultaneous approximation and local tensor/norm compatibility hold in ZF. [[thm-number-field-finite-weak-approximation-in-zf]], [[lem-number-field-completion-tensor-and-norm-in-zf]]

## Proof

1.1 We first record a field-algebra calculation valid in characteristic different from $2$. For $u,v\in F^\times$, let $N_u$ denote the norm group from $F(\sqrt u)$, interpreting it as $F^\times$ when $u$ is a square. Put $M=F(\sqrt{uv})$ and $L=F(\sqrt u,\sqrt v)$. Then $$N_uN_v=F^\times\cap N_{L/M}(L^\times),$$ where an identity extension has identity norm. If $u$ or $v$ is a square, both sides are $F^\times$; if $uv$ is a square but neither entry is, both sides are $N_u=N_v$. Otherwise $L/F$ is biquadratic. Write $\sigma$ for the automorphism fixing $\sqrt u$ and $\tau$ for the one fixing $\sqrt v$. A product of the two norms is visibly a norm for $L/M$, since $N_{L/M}(xy)=(x\tau x)(y\sigma y)$ for $x\in F(\sqrt u)$ and $y\in F(\sqrt v)$. Conversely suppose $z\sigma\tau z=c\in F^\times$. Then $\sigma z\,\tau z=c$, and $r=z\sigma z/c\in F(\sqrt u)$ has norm $1$ to $F$. Choose $x\in F(\sqrt u)^\times$ with $\tau x/x=r$: explicitly $x=1+r^{-1}$ if $r\ne-1$ and $x=\sqrt u$ otherwise. Set $y=\sigma\tau z/x$. The identities give $\tau y=\sigma z/(rx)=c/(zx)=y$, so $y\in F(\sqrt v)$. As $xy=\sigma\tau z$, we obtain $c=(x\tau x)(y\sigma y)$, proving the equality. [given, construct, algebra]

1.2 Diagonalization is obtained by successively splitting a vector of nonzero value and its orthogonal complement; if every vector had zero value, polarization would make the bilinear form zero. Scale a diagonal form in dimension $3$ to $X^2-uY^2-cZ^2$. If $u$ is a square it is isotropic already; otherwise it is isotropic precisely when $c\in N_u$. Indeed an isotropic vector must have $Z\ne0$, unless the binary part is already isotropic, which is the excluded square case. Consequently [F1] proves the asserted local–global principle in dimension $3$. Dimension $1$ has no isotropic forms; in dimension $2$ it reduces to being a square in $F$ at every place, which forces being a global square by [F2]. [F1, F2, construct, algebra]

1.3 Every nonsingular diagonal form in at least $3$ variables over $F$ is isotropic at all but finitely many finite places. Outside the dyadic primes and the coefficient supports, reduce any three coefficients $a,b,c$ to nonzero elements of the residue field $k$, of odd order $Q$. The two sets $\{ax^2:x\in k\}$ and $\{-c-by^2:y\in k\}$ have size $(Q+1)/2$, so intersect. Thus $ax^2+by^2+c=0$ for some residues $x,y$. Lift these to local integers; then $-(ax^2+by^2)/c$ is a unit congruent to $1$ and has a square root by [F3]. This gives a nonzero local zero with third coordinate a unit. There are only finitely many excluded finite primes by finite ideal factorisation. [F3, F4, construct, algebra]

2.1 A diagonal form in dimension $4$ scales to $$X^2-uY^2-cZ^2+vcT^2.$$ It is isotropic precisely when $c\in N_uN_v$: if either binary part is isotropic, the claim is immediate since the corresponding norm group is all of $F^\times$; otherwise any nonzero zero gives a ratio of two nonzero binary norms, and conversely such a ratio gives a zero. By step 1.1 this is equivalent to $c$ being a norm for $L/M$. If the form is isotropic over every completion of $F$, the same algebra calculation over each completion shows that $c$ is a norm at each completion of $M$; use the tensor decomposition [F4] for the possibly split factors. If $L/M$ is quadratic, [F1] now makes $c$ a global norm. If it is an identity extension there is nothing to prove. Step 1.1 then gives a global zero of the form. This proves dimension $4$. [F1, F4, step 1.1, step 1.2, construct, algebra]

3.1 Proceed by induction on the dimension $n\ge5$, the lower dimensions having been proved. Write $q=A\perp r$, with $A=\langle a_1,a_2\rangle$ and $\dim r=n-2\ge3$, and let $S$ consist of all places where $r$ is anisotropic. It is finite by step 1.3 and finiteness of the infinite places. If $S$ is empty, induction applied to $r$ gives a global zero of $q$. Otherwise, at each $v\in S$ local isotropy of $q$ gives a common value of $A$ and $-r$. This common value may be chosen nonzero: if it is zero, anisotropy of $r$ forces its coordinates to vanish, so $A$ has a nonzero zero. A nonsingular isotropic binary form represents every element, as follows by choosing isotropic $e$ and $f$ with $B(e,f)\ne0$ and solving $A(f+te)=A(f)+2tB(e,f)$ for $t$. Choose a nonzero value of $-r$ and represent it by $A$. Thus choose $(x_v,y_v)$ with nonzero $c_v=A(x_v,y_v)$ and with $-c_v$ represented by $r$. [step 1.2, step 2.1, step 1.3, construct, algebra]

4.1 Every nonzero square class is open at every completion: use [F3] at finite places, the sign at real places, and the fact that all nonzero complex numbers are squares. Continuity therefore gives neighborhoods of the finitely many $(x_v,y_v)$ on which $A(x,y)$ lies in $c_vF_v^{\times2}$. By [F4], choose one global pair $(x,y)$ in all those neighborhoods and put $c=A(x,y)\ne0$. The form $\langle c\rangle\perp r$ is locally isotropic at $S$, since $r$ represents $-c$ there, and outside $S$, since $r$ is already isotropic. Its dimension is $n-1$, so induction gives a global zero. Substituting its first coordinate $z$ into the binary pair $(xz,yz)$ gives a global zero of $q$. The resulting vector is nonzero: if $z=0$ the $r$-part is nonzero, and otherwise $(x,y)\ne(0,0)$ since $c\ne0$. This completes induction. Finally any global zero stays a nonzero zero after every field embedding into a completion, proving the converse and the theorem. [F3, F4, step 3.1, construct, algebra] ∎

