---
id: lem-normalized-primary-perturbation-is-pn-power
kind: lemma
title: "A normalized primary-series perturbation is a higher power"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-vostokov-formal-exponential-integrality-and-inversion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter VI, §3.1 and §4.2, printed pp. 219–221 and 230–231; the normalized series bounds and specified perturbation are reconstructed below."
---

## Statement

Let p be odd, K₀/ℚ_p a finite unramified extension with ring R and arithmetic Frobenius φ, and F/K₀ a finite extension with uniformizer π and e=v_F(p). Let ζ∈F be a primitive p^n-th root, n≥1, and put h=e/((p-1)p^(n-1)) and c=pe/(p-1). Suppose z∈1+X^hR⟦X⟧, h is a positive integer, and z(π)=ζ. Put s=z^(p^n)-1 and define E_X, Δ as in [[lem-vostokov-formal-exponential-integrality-and-inversion]]. For any g,k∈XR⟦X⟧ put

    q=p^(n-1)s^(p-1)g+s^p k.

Then E_X(q)(π) is a p^n-th power in F×. This covers the displayed perturbation of a normalized lift only. It does not prove that a difference between arbitrary lifts has this form, or prove a primary trace criterion.

## Facts & Assumptions

**Given:** The fields, prime, normalized series, primitive root, exponent and series g,k in the Statement.

[F1] E_X is the integral formal exponential exp(sum_(j>=0)p^(-j)Δ^j(-)), with convergent evaluation at π. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

## Proof

1.1 Put s_m=z^(p^m)-1 for m≥0. The congruence s_m≡Δs_(m-1) mod p^m holds for every m≥1. For m=1 it follows from coefficientwise Frobenius modulo p. If it holds at m-1, replacing its two sides inside (1+T)^p-1 changes the result by a multiple of p^m: the linear term gains p, the intermediate binomial coefficients are divisible by p, and the final pth-power difference is also divisible by p^m. This proves the induction. Every s_m lies in X^hR⟦X⟧, so for k≥1 write Δs_(n+k-1)=s_(n+k)+p^(n+k)H_k with H_k∈X^hR⟦X⟧. Iteration gives Δ^j s=s_(n+j)+sum_(k=1)^j p^(n+k)Δ^(j-k)H_k. [given, construct, algebra]

1.2 For a series A=sum A_iX^i put w(A)=inf_i(v_F(A_i)+i). Write z-1=X^h u with u∈R⟦X⟧. For 1≤m≤p^n, v_p(binomial(p^n,m))=n-v_p(m), since the coefficients of (1+T)^(p^n-1) are nonzero modulo p. Hence each term of p^(-j)Δ^j s has weighted bound at least (n-r-j)e+p^(r+j)h, where r=v_p(m). The function B(v)=(n-v)e+p^v h has minimum c at v=n-1 and n, and tends to infinity as v→infinity. Therefore w(p^(-j)Δ^j s)≥c for every j and tends to infinity as j→infinity. Since g,k have positive X-order, w(Δ^j g),w(Δ^j k)≥p^j. It follows that w(p^(-j)Δ^j q)>e/(p-1) for all j and these weights tend to infinity. [given, algebra]

2.1 Evaluation kills s_(n+j) since ζ^(p^n)=1. Each summand in step 1.1 has valuation at least (n+k)e+p^(j-k)h. This is strictly greater than e(1+max(j,n)): if n≥j it exceeds (n+1)e; if j>n and k≥j-n+1 it exceeds (j+1)e; otherwise put r=j-k-n+1≥1 and use p^r/(p-1)>r. The last inequality follows from p^r≥1+r(p-1). Thus v_F(Δ^j s(π))>e(1+max(j,n)) for every j≥1. [step 1.1, given, algebra, cases]

3.1 Put B_j=v_F(Δ^j s(π)). By step 2.1, B_j>e(1+max(j,n)) for j≥1. As Δ^j g(π),Δ^j k(π) have valuation at least p^j, the two summands of p^(-n-j)Δ^j q(π) have valuations greater than (p-2)(j+1)e+p^j and p e+(p-2)max(j,n)e+p^j, respectively. Both exceed e/(p-1) and tend to infinity. Thus T=sum_(j>=1)p^(-n-j)Δ^j q(π) converges with valuation above e/(p-1). [step 2.1, given, algebra]

4.1 The weighted bounds in step 1.2 make the defining series sum_j p^(-j)Δ^j q and its exponential converge in the complete weighted series ring; evaluation at π is continuous there. Since s(π)=0, q(π)=0. Step 3.1 therefore gives E_X(q)(π)=exp(p^n T)=exp(T)^(p^n), where the p-adic exponential converges because v_F(T)>e/(p-1). This proves the stated p^n-power conclusion without asserting any arbitrary-lift decomposition. [F1, step 1.2, step 3.1, algebra] ∎
