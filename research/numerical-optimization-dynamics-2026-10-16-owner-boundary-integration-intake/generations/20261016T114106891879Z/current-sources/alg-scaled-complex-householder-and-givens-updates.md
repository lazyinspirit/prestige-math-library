---
id: alg-scaled-complex-householder-and-givens-updates
kind: algorithm
title: Scaled real and complex Householder and Givens update arithmetic
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
- def-householder-reflector
- def-real-and-complex-givens-transformations
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Stuart and Voss, Matrix Analysis and Algorithms
    url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
dependency_level: 1
---

## Definition

Use the operationwise real/complex arithmetic model, with six-real-operation complex products and componentwise division by positive real scalars. A scaled norm of a nonzero complex vector first chooses the largest absolute real or imaginary component $s>0$, rounds every real component divided by $s$, sums their rounded squares sequentially, rounds the positive square root, and rounds multiplication by $s$. A norm of already scaled components omits the last multiplication. Zero input has exact norm zero. Reject every nonzero exact intermediate outside the normal range, nonfinite/invalid operation, and nonpositive required norm; return the first range-failure. All sign changes and conjugations are exact.

For a Householder active block $C=[x\;B]$, $x\in\mathbb C^r$, a zero $x$ copies the block with identity action. Otherwise compute $\widehat N$ by the scaled norm. If $x_1=0$ put $\widehat\phi=1$; otherwise compute its modulus $\widehat a$ by its own two-component scaled norm and divide its real and imaginary parts by $\widehat a$. Set $\widehat\alpha=-\operatorname{fl}(\widehat\phi\widehat N)$ using real-scalar component multiplication, and $v=\operatorname{fl}(x-\widehat\alpha e_1)$. Compute $w$ by sequential summation of all $2r$ rounded real component squares of $v$, and $\widehat\tau=\operatorname{fl}(2/w)$. Compute $d=\operatorname{fl}(v^*B)$, $p=\operatorname{fl}(\widehat\tau v)$, $Z=\operatorname{fl}(pd)$, and $\widehat B=\operatorname{fl}(B-Z)$. Return $C_+=[\widehat\alpha e_1\;\widehat B]$, writing exact zeros below the target diagonal, and store $v,\widehat\tau$. Its theoretical representative is $H(v)=I-2vv^*/(v^*v)$. For a separate block application omit the column overwrite. For a right step apply these instructions to the conjugate-transposed block and transpose back.

For a Givens target pair $(a,b)$, use the identity when $b=0$, including $(0,0)$. Otherwise choose $\lambda$ as the largest absolute real/imaginary component of $(a,b)$, round $z=a/\lambda$ and $w=b/\lambda$ componentwise, and compute $h$ as the norm of their four already scaled components. If $z\ne0$, compute $n_z$ as the norm of its two components, $\widehat\phi=\operatorname{fl}(z/n_z)$, $c=\operatorname{fl}(n_z/h)$ and $s=\operatorname{fl}(\operatorname{fl}(\widehat\phi\overline w)/h)$. If $z=0$, set $c=0$ and $s=\operatorname{fl}(\overline w/h)$. Store $T=\begin{pmatrix}c&s\\-\overline s&c\end{pmatrix}$ and apply it to the chosen two rows using two complex products and one rounded componentwise addition for each output entry. For an actual target column, set its intended annihilated entry to exact zero after the update. The initial shift-vector rotation is formed from the shift vector but applied to the matrix without zeroing an unrelated matrix entry. Right applications use the conjugate-transposed form. Its exact unitary representative is $Q=T/\sqrt{c^2+|s|^2}$; this normalization defines a mathematical representative and is not an additional rounded operation.

These are arithmetic realizations of the canonical Householder and Givens methods. Returned dense transformation accumulators may be rounded; the exact unitary products used in backward-error statements are represented by the stored local data. Additional discarded matrix entries must be recorded separately, including their magnitudes. Their omission is never implicit in a sparsity convention.
