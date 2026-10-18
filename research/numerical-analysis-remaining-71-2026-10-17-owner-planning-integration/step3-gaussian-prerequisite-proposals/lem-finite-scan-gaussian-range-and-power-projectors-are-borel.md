---
id: lem-finite-scan-gaussian-range-and-power-projectors-are-borel
kind: lemma
title: Finite-scan range and power projectors are Borel and their residuals are integrable
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - thm-composition-with-borel-functions-preserves-measurability
  - prop-orthogonal-projection-formula-and-linearity
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: direct
axiom_use: No choice axiom is used in this deterministic finite-dimensional result; a supplied Gaussian law may separately require Countable Choice.
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $F=\mathbb R$ or $\mathbb C$. For a finite matrix $Y\in F^{a\times b}$ define $S(Y)$ by scanning its columns in order. Subtract from the next column its orthogonal projections onto the previously retained unit vectors; skip a zero residual and otherwise divide by its positive Euclidean norm and retain it. In the complex case multiply each newly retained vector by the unit scalar making its first nonzero coordinate positive real. Let $r(Y)$ be the number retained and let $S^{\rm pad}(Y)\in F^{a\times b}$ append $b-r(Y)$ zero columns to the retained basis. Then the scan terminates, $S(Y)$ is an orthonormal basis of $\operatorname{Ran}Y$, and $r(Y)$, $S^{\rm pad}(Y)$ and
$$P(Y)=S^{\rm pad}(Y)S^{\rm pad}(Y)^*$$
are Borel functions of the real coordinates of $Y$. A variable-column basis is understood as its rank label together with this padding, or equivalently as a member of the finite disjoint union of its fixed-rank matrix spaces.

Fix $A\in F^{m\times n}$, a finite width $\ell\ge1$ and an integer $q\ge0$. Set $Q_0=S(A\Omega)$ and for $1\le j\le q$ set $\widetilde Q_j=S(A^*Q_{j-1})$ and $Q_j=S(A\widetilde Q_j)$. All these rank-labelled bases and their padded matrices and projectors are Borel in $\Omega\in F^{n\times\ell}$. Their final range is
$$\operatorname{Ran}Q_q=\operatorname{Ran}((AA^*)^qA\Omega).$$
For any orthonormal basis $R$ of this same final range, including an arbitrarily selected one, $RR^*=Q_qQ_q^*$. Consequently $\Omega\mapsto\|(I-RR^*)A\|_2$ is the same bounded Borel function as the finite-scan residual, regardless of whether an alternative basis selection is itself measurable. It lies between $0$ and $\|A\|_2$ and is integrable under every Borel probability law of $\Omega$. Empty input ranges give empty bases and zero projectors throughout; if a matrix coordinate dimension is zero the corresponding constant maps have the same properties.

## Facts & Assumptions

**Given:** The finite scan explicitly defined in the Statement, real coordinates for complex matrices, and the fixed matrices and finite iteration count there.

[F1] Continuous maps between topological spaces pull Borel sets back to Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F2] The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra ([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]).

[F3] A composition of measurable maps is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F4] In a finite-dimensional real or complex inner product space, the orthogonal projection onto a subspace with orthonormal basis $(e_i)$ is $v\mapsto\sum_i\langle v,e_i\rangle e_i$. It is independent of the chosen orthonormal basis, and $I-P_W=P_{W^\perp}$ ([[prop-orthogonal-projection-formula-and-linearity]]).

[F5] The spectral norm is at most the Frobenius norm, including the zero matrix ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]). The spectral norm obeys the norm triangle inequality, so $|\|B\|_2-\|C\|_2|\le\|B-C\|_2\le\|B-C\|_F$.

[F6] Nonnegative integral monotonicity compares a bounded nonnegative function with its constant upper bound ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). The integral of a nonnegative constant simple function is that constant times the total measure ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]). A real measurable function is integrable precisely when its absolute-value integral is finite ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

1.1 After processing the first $j$ columns, the retained vectors are orthonormal and span exactly those columns. This is a finite induction. The next residual is orthogonal to every retained vector by direct expansion of the projection subtraction. If it is zero, the next column already lies in their span. Otherwise its positive norm may be divided out, giving a new unit vector perpendicular to that span. In the complex case its first nonzero coordinate $v_i$ exists among finitely many coordinates; multiplication by $\overline{v_i}/|v_i|$ leaves its norm and orthogonality unchanged and makes that coordinate $|v_i|>0$. Thus the induction holds, with the empty list at $j=0$. At most $b$ columns are scanned, and no zero divisor is used. [given, construct, algebra]

2.1 Partition the input matrices by the finite sequence of scan decisions. Start with the whole input space as one Borel stratum and no retained vectors. Suppose on each stratum after $j$ columns the retained vectors depend continuously on the input relative to that stratum. The next residual is a finite sum of products and conjugates of these vectors and input entries, so it is relatively continuous. Its zero set is relatively closed and its nonzero set relatively open. In the complex nonzero branch, subdivide further by the first nonzero residual coordinate: all earlier coordinates are zero and the selected coordinate has nonzero modulus. Each subdivision is relatively Borel by [F1], hence ambient Borel by [F2]. The normalized vector and phase scalar are relatively continuous on that subdivision since their denominators never vanish. Thus the induction gives finitely many ambient Borel strata, fixed retained rank on each, and relative continuity of the padded output there. [F1, F2, step 1.1, construct, algebra]

3.1 A finite pasting of these relatively continuous maps is Borel: for any Borel set $E$ in the padded output space, the preimage is the finite union over strata $T$ of $T\cap B_T$, where relative continuity and [F1], [F2] give an ambient Borel $B_T$ for the preimage restricted to $T$. The rank label is constant on each Borel stratum and therefore Borel as well. Matrix multiplication and adjoint are continuous real-coordinate operations, so [F3] makes $P(Y)$ Borel. By step 1.1 and [F4] it is precisely the orthogonal projector onto $\operatorname{Ran}Y$, including the zero projector when no vector is retained. [F1, F2, F3, F4, step 2.1, algebra]

4.1 Use padding to width $\ell$ at every power step. Multiplication by the fixed $A$ or $A^*$ is continuous, and scanning a padded basis instead of its unpadded version only adds zero residuals at the end, so it yields the same actual retained basis. Thus steps 2.1–3.1 and [F3], applied a finite $2q+1$ times, prove all asserted measurability properties. If $W=\operatorname{Ran}Q$, then $\operatorname{Ran}(A^*Q)=A^*W$ and the next scan preserves this range by step 1.1. Multiplying again by $A$ and repeating proves $\operatorname{Ran}Q_q=\operatorname{Ran}((AA^*)^qA\Omega)$; for $q=0$ it is simply $\operatorname{Ran}(A\Omega)$. Empty ranges remain empty under these operations. [F3, step 1.1, step 3.1, construct, algebra]

5.1 If $R$ is any other orthonormal basis of the final range, [F4] gives $RR^*=Q_qQ_q^*$ for every single input, not only almost surely. Thus no measurability hypothesis on a choice of $R$ is needed. The matrix $(I-P)A$ is Borel in $\Omega$ by the finite coordinate operations and [F3]. Inequality [F5] shows that its spectral norm is a continuous function of its matrix entries and hence gives a Borel scalar by [F1], [F3]. The orthogonal decomposition $v=Pv+(I-P)v$ gives $\|(I-P)v\|^2\le\|v\|^2$, so the residual norm is at most $\|A\|_2$. For any probability law $\mu$ of the input, [F6] gives $\int\|(I-P)A\|_2\,d\mu\le\int\|A\|_2\,d\mu=\|A\|_2<\infty$, so the nonnegative residual is integrable, including when $A=0$. Zero-dimensional coordinate spaces have one point with its two-set Borel sigma-algebra, so the constant empty-matrix branches also satisfy every assertion. [F1, F3, F4, F5, F6, step 3.1, step 4.1, algebra] ∎
