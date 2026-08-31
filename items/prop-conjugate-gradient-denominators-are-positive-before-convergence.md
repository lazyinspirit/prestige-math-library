---
id: prop-conjugate-gradient-denominators-are-positive-before-convergence
kind: proposition
title: "Before convergence, every CG denominator $p_k^*Ap_k$ is positive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conjugate-gradient-recurrence,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
---

## Statement

Assume the conjugate-gradient recurrence of
[[def-conjugate-gradient-recurrence]] is defined through step $k$ for a
Hermitian positive-definite matrix $A$. If $r_k\ne0$, then $p_k\ne0$ and

$$p_k^*Ap_k=\|p_k\|_A^2>0.$$

## Facts & Assumptions

**Given:** A Hermitian positive-definite system $Ax=b$, a CG run through step
$k$, and a nonzero residual $r_k$.

[F1] CG uses the recurrence
$$\alpha_j=\frac{\langle r_j,r_j\rangle}{\langle Ap_j,p_j\rangle},\qquad r_{j+1}=r_j-\alpha_jAp_j,\qquad \beta_j=\frac{\langle r_{j+1},r_{j+1}\rangle}{\langle r_j,r_j\rangle},\qquad p_{j+1}=r_{j+1}+\beta_jp_j$$
with $p_0=r_0$
([[def-conjugate-gradient-recurrence]]).

[L1] For Hermitian positive-definite $A$, the energy norm satisfies
$$\|u\|_A^2=\langle Au,u\rangle,$$
and it is positive on nonzero vectors
([[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]).

## Proof
**Proof technique:** direct.

1.1 We first show by induction on $j\le k$ that $\langle p_j,r_j\rangle=\langle r_j,r_j\rangle$. For $j=0$ this is immediate from $p_0=r_0$ in [F1]. If it holds at $j$, then [F1] gives $\langle p_j,r_{j+1}\rangle=\langle p_j,r_j\rangle-\alpha_j\langle p_j,Ap_j\rangle=\langle r_j,r_j\rangle-\alpha_j\langle p_j,Ap_j\rangle=0$, so $$\langle p_{j+1},r_{j+1}\rangle=\langle r_{j+1},r_{j+1}\rangle+\beta_j\langle p_j,r_{j+1}\rangle=\langle r_{j+1},r_{j+1}\rangle.$$ Thus the identity holds for every $j\le k$. [F1, induction, algebra]

2.1 At $j=k$, step 1.1 gives $\langle p_k,r_k\rangle=\langle r_k,r_k\rangle>0$ because $r_k\ne0$. Hence $p_k\ne0$. By [L1], $$p_k^*Ap_k=\langle Ap_k,p_k\rangle=\|p_k\|_A^2>0,$$ which is the desired positivity of the denominator. [L1, step 1.1, algebra] ∎
