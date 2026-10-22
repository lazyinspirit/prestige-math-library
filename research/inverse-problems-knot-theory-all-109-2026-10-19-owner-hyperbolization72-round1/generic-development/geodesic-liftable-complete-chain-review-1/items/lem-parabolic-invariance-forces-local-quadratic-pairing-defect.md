---
id: lem-parabolic-invariance-forces-local-quadratic-pairing-defect
kind: lemma
title: Parabolic invariance forces a local quadratic pairing defect
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-taylor-expansion-holomorphic-function
  - thm-zero-order-factorization-holomorphic-function
  - thm-identity-theorem-holomorphic-functions
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Theorem6.1 proof, printed447–448, and its generalization Theorem7.3, printed449; actual full Sections5–7 read. The proof below supplies the local limiting-pairing obstruction without importing weak-star Beltrami compactness or an invariant round subdisc argument.
---

## Statement

Assume Countable Choice. Let $D_R=\{|z|<R\}$, $R>0$, and let $q_n$ be holomorphic quadratic coefficients there, converging locally uniformly to a holomorphic $q\not\equiv0$. Let $\gamma$ be a nonidentity parabolic Mobius transformation fixing $0$. Supply $0<s<R$ such that $\gamma(\overline D_s)\subset D_R$, and Mobius maps $\gamma_n$ converging to $\gamma$ with all derivatives on a neighborhood of $\overline D_s$, with $\gamma_n(D_s)\subset D_R$ eventually. Let $\mu_n$ be measurable Beltrami coefficients on $D_R$, with $|\mu_n|\le1$ almost everywhere and
$$\mu_n(\gamma_nz)\frac{\overline{\gamma_n'(z)}}{\gamma_n'(z)}=\mu_n(z)\quad\text{for almost every }z\in D_s.$$
Then for every $0<r<s$ it is impossible that
$$\int_{D_r}\bigl(|q_n|-\operatorname{Re}(\mu_nq_n)\bigr)\,dA\longrightarrow0.$$

More precisely, for every fixed $0<r<s$ and compact set $K\Subset D_R$ containing $\overline D_r$, there exist $c<1$ and $N$ such that for $n\ge N$, every such locally $\gamma_n$-invariant coefficient $\mu$ and every measurable $E$ with $D_r\subset E\subset K$ have
$$\operatorname{Re}\int_E\mu q_n\,dA\le c\int_E|q_n|\,dA.$$
The constant may depend on the supplied sequence, limit and neighborhoods. This is a local analytic consequence of the exact displayed convergence and invariance hypotheses; it does not supply the geometric comparison domains or projective normalization that might produce them.

Holomorphicity of the nonzero limit at the fixed point is essential: for $\gamma(z)=z/(1+cz)$, $c\ne0$, the meromorphic quadratic $dz^2/z^4$ is invariant. No obstruction of this form is asserted for that fourth-order pole.

## Facts & Assumptions

**Given:** Countable Choice, the actual common-domain holomorphic limit and local Mobius convergence, the invariant bounded coefficients and the small radii; the outer compact set only for the uniform-efficiency conclusion.

[A1] Countable Choice is [[def-countable-choice]].

[F1] A holomorphic function has its actual convergent Taylor expansion, and a nonzero germ factors as $z^m a(z)$ with finite $m\ge0$ and $a(0)\ne0$. The identity theorem excludes an identically zero germ for a nonzero function on the connected disc. [[thm-taylor-expansion-holomorphic-function]], [[thm-zero-order-factorization-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]]

[F2] Injective smooth changes of variables obey the measurable Jacobian formula under Countable Choice. In particular, smooth convergent Mobius diffeomorphisms on a compact set have uniform Jacobian and inverse-Jacobian bounds and preserve null sets. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

## Proof

1.1 A Mobius map fixing $0$ is locally $z\mapsto az/(cz+d)$ with $ad\ne0$. A parabolic with that fixed point has derivative one there: the second fixed point coincides with $0$, so the nonzero linear coefficient in its fixed-point equation vanishes, giving $a=d$. Since the map is not identity its denominator coefficient is nonzero. After division by $d$ it is $$\gamma(z)=\frac z{1+bz},\qquad b\ne0.$$ By [F1], on a sufficiently small disc the nonzero limit has $$q(z)=a_0z^m+a_1z^{m+1}+O(z^{m+2}),\qquad m\ge0,\quad a_0\ne0,$$ and has no zeros there other than possibly $0$. Shrink a positive radius $t<r$ so that both $\overline D_t$ and $\gamma(\overline D_t)$ lie inside that zero-free-punctured radius-$r$ neighborhood. Late $\gamma_n$ images lie there as well, except that compact sets avoiding $0$ are used whenever a positive lower bound for $|q|$ is required. [F1, given, construct, algebra]

2.1 Suppose for contradiction that the displayed defects on $D_r$ tend to zero. For $q_n(z)\ne0$ put $v_n(z)=\overline{q_n(z)}/|q_n(z)|$. The pointwise inequality $$|\mu_n-v_n|^2|q_n|\le2\bigl(|q_n|-\operatorname{Re}(\mu_nq_n)\bigr)$$ follows by expanding the square and using $|\mu_n|\le1$. Every compact subset $C$ of $D_r$ avoiding the zeros of $q$ has a positive lower bound for $|q_n|$ eventually, and $v_n\to v:=\overline q/|q|$ uniformly there. Integrating the inequality therefore gives $\mu_n\to v$ in $L^2(C)$ for every such compact set. This is strong local convergence forced by the actual pairing defects, rather than a weak compactness assertion about arbitrary bounded coefficients. [step 1.1, given, construct, algebra]

3.1 Let $C$ be any compact disc in $0<|z|<t$, small enough that its image under $\gamma$ avoids $0$. A fixed compact neighborhood $C'$ of $\gamma(C)$ lies in $D_r$ away from the zeros of $q$, and contains all late $\gamma_n(C)$. By [F2] and step 2.1, $$\int_C|\mu_n(\gamma_nz)-v(\gamma_nz)|^2\,dA(z)\le C_0\int_{C'}|\mu_n-v|^2\,dA\longrightarrow0.$$ Uniform continuity gives $v\circ\gamma_n\to v\circ\gamma$ uniformly on $C$. Also the factors $\overline{\gamma_n'}/\gamma_n'$ converge uniformly to $\overline{\gamma'}/\gamma'$ there and have modulus one. Pass in $L^2(C)$ through the assumed invariance equation and use step 2.1 on $C$ itself. We obtain $$v(\gamma z)\frac{\overline{\gamma'(z)}}{\gamma'(z)}=v(z).$$ It holds almost everywhere and hence everywhere on $C$, because both sides are continuous. Such discs cover the punctured $D_t$, giving the equality throughout it. All composition and null-set steps used actual diffeomorphism change of variables. [F2, step 1.1, step 2.1, given, construct, algebra]

4.1 Substituting $v=\overline q/|q|$ into step 3.1 and conjugating shows that the holomorphic nonvanishing function $$B(z)=\frac{q(\gamma z)\gamma'(z)^2}{q(z)}$$ is positive real throughout the connected punctured disc. A real-valued holomorphic function has zero derivative by the Cauchy–Riemann equations, so $B$ is a positive constant. The expansion in step 1.1 and $\gamma(z)/z\to1$, $\gamma'(z)\to1$ show this constant is one. Hence $q(\gamma z)\gamma'(z)^2=q(z)$. But $\gamma(z)=z-bz^2+O(z^3)$ and $\gamma'(z)^2=1-4bz+O(z^2)$, so the left side expands as $$a_0z^m+\bigl(a_1-(m+4)ba_0\bigr)z^{m+1}+O(z^{m+2}).$$ Equality with $q(z)$ forces $(m+4)ba_0=0$, impossible since $m\ge0$, $b\ne0$ and $a_0\ne0$. This contradiction proves the primary defect obstruction. [F1, step 1.1, step 3.1, construct, algebra]

5.1 Fix $r,K$ for the uniform-efficiency assertion. Local uniform convergence bounds $\int_K|q_n|$ above by one finite constant $M$ for all sufficiently large $n$, while $\int_{D_r}|q_n|$ stays bounded below by a positive number because $q\not\equiv0$. If no $c<1,N$ existed, choose increasing $n_k$, admissible coefficients $\mu_k$ and sets $E_k$ with $D_r\subset E_k\subset K$ whose efficiency exceeds $1-1/k$. Their nonnegative defect integrals satisfy $$0\le\int_{D_r}(|q_{n_k}|-\operatorname{Re}(\mu_kq_{n_k}))\,dA\le\int_{E_k}(|q_{n_k}|-\operatorname{Re}(\mu_kq_{n_k}))\,dA\le M/k\longrightarrow0.$$ This contradicts step 4.1 applied to that subsequence, which preserves the same nonzero holomorphic limit and nonidentity parabolic map. Countable Choice suffices for this selection. Finally direct substitution gives $(\gamma(z))^{-4}\gamma'(z)^2=z^{-4}$, proving the stated fourth-order-pole qualification. This completes the local analytic theorem and its precise uniform consequence. [A1, step 2.1, step 4.1, given, construct, algebra] ∎

## Actual reading and remaining interface

The authentic Iteration full Sections5–7, including the complete proofs of6.1,6.4 and7.1 and the precise7.3 generalization, were read. The full actual Taylor, zero-order factorization, identity theorem and real measurable change-of-variables supplier proofs were read. No weak-star compactness, L1-dual representation or invariant round-domain theorem is imported.

To apply this to actual thin geodesics, one must still construct the specified common comparison chart with the parabolic fixed point interior, an honest nonidentity parabolic matrix limit, locally convergent nonzero quadratics HOLomorphic at that point, and the stated coefficient invariance. A merely meromorphic projective limit with a fourth-order pole would not suffice. These are explicit geometric and compactness inputs, not supplied by the local defect argument.
