---
id: ex-classical-simple-lie-algebras-and-their-killing-forms
kind: example
title: Classical simple Lie algebras and their Killing forms
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Killing-form exercises"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§5.8, Exercise 5.2 and the root-space discussion in §6.3, printed pp. 87 and 95–96"
---

## Example

For the split classical matrix Lie algebras over a field $k$ of
characteristic zero,

$$\begin{aligned} K_{\mathfrak{sl}_n}(X,Y)&=2n\,\operatorname{tr}(XY) &&(n\geq2),\\ K_{\mathfrak{so}_n}(X,Y)&=(n-2)\operatorname{tr}(XY) &&(n=3\ \text{or}\ n\geq5),\\ K_{\mathfrak{sp}_{2n}}(X,Y)&=2(n+1)\operatorname{tr}(XY)&&(n\geq1). \end{aligned}$$

The displayed forms are nondegenerate in these simple ranges.

## Facts & Assumptions

**Given:** The standard defining matrix realizations, with the split
symmetric or alternating form in the orthogonal or symplectic case.

[L1] The Killing form is the trace form of the adjoint representation
([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L2] Nondegeneracy of the Killing form is equivalent to semisimplicity in
finite dimension and characteristic zero
([[thm-cartans-semisimplicity-criterion]]).

## Verification

**Proof technique:** direct trace and root-weight calculation.

1.1 On $\operatorname{End}(k^n)$, $\operatorname{ad}_X=L_X-R_X$. The trace identities $$\operatorname{tr}(L_XL_Y)=n\operatorname{tr}(XY),\quad \operatorname{tr}(R_XR_Y)=n\operatorname{tr}(XY),\quad \operatorname{tr}(L_XR_Y)=\operatorname{tr}(X)\operatorname{tr}(Y)$$follow by applying the maps to the matrix units $E_{ij}$. Hence$$\operatorname{tr}_{\mathfrak{gl}_n} (\operatorname{ad}_X\operatorname{ad}_Y) =2n\operatorname{tr}(XY)-2\operatorname{tr}(X)\operatorname{tr}(Y).$$ For traceless $X,Y$, the central line in $\mathfrak{gl}_n=kI\oplus\mathfrak{sl}_n$ contributes zero to the adjoint trace, proving the first formula. [L1, given, algebra]
1.2 Use the standard split Cartan and root matrices, all defined over $k$. For a Cartan element write its coordinates as $(t_1,\ldots,t_r)$. The roots of $\mathfrak{so}_{2r}$ are $\pm\varepsilon_i\pm\varepsilon_j$; those of $\mathfrak{so}_{2r+1}$ add $\pm\varepsilon_i$. Summing $\alpha(H)\alpha(H')$ over the roots gives respectively $4(r-1)\sum_i t_is_i$ and $(4r-2)\sum_i t_is_i$. Since the defining matrix trace is $2\sum_i t_is_i$, both results equal $(n-2)\operatorname{tr}(HH')$. [L1, algebra]
1.3 The roots of $\mathfrak{sp}_{2r}$ are $\pm\varepsilon_i\pm\varepsilon_j$ and $\pm2\varepsilon_i$. Their sum gives $4(r+1)\sum_i t_is_i$; dividing by the same defining trace $2\sum_i t_is_i$ yields $2(r+1)\operatorname{tr}(HH')$. Invariance pairs a root space only with its opposite root space, and direct multiplication of the standard root matrices gives the same nonzero scalar there. Thus the identities on the Cartan and opposite-root pairs determine the displayed orthogonal and symplectic forms on the whole algebra. [algebra]
2.1 The trace pairing is nondegenerate on each displayed matrix algebra: diagonal Cartan coordinates pair coordinatewise, while every root matrix pairs nontrivially with its opposite. The scalar multipliers $2n$, $n-2$, and $2(n+1)$ are nonzero in characteristic zero, so all three Killing forms are nondegenerate. [step 1.1, step 1.2, step 1.3]
3.1 The excluded orthogonal ranks explain the endpoints: $\mathfrak{so}_1=0$, $\mathfrak{so}_2$ is one-dimensional abelian and has zero Killing form, and $\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$ is semisimple but not simple (its formula is still $2\operatorname{tr}(XY)$). Thus none is silently included among the simple orthogonal cases. All calculations are finite and choice-free. [L2, algebra] ∎
