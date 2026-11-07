---
id: lem-normalized-primary-frobenius-coboundary-is-pn-power
kind: lemma
title: "A normalized primary Frobenius coboundary is a higher power"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
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
      locator: "Chapter VI, §§3.1 and 4.1–4.2, printed pp. 219–221 and 229–231; the normalized trace-zero case is reconstructed below without an unramified closure."
---

## Statement

Let p be odd, K₀/ℚ_p finite unramified with valuation ring R and arithmetic Frobenius φ, and F/K₀ finite with uniformizer π and e=v_F(p). Let ζ∈F be a primitive p^n-th root, n≥1, and put h=e/((p-1)p^(n-1)) and c=pe/(p-1). Suppose h is a positive integer and z∈1+X^hR⟦X⟧ satisfies z(π)=ζ. Put s=z^(p^n)-1. For every d∈R,

    E_X((φ(d)-d)s)(π) ∈ F^(×p^n),

where E_X and Δ are the formal operators of [[lem-vostokov-formal-exponential-integrality-and-inversion]]. The result concerns a normalized lift and a supplied Frobenius coboundary; it does not assert a trace criterion, arbitrary-lift invariance, or a full principal-unit decomposition.

## Facts & Assumptions

**Given:** The local fields, normalized series, root, exponent and coefficient d in the Statement.

[F1] E_X and ℓ_X are inverse integral group maps on positive-order series over R, E_X is additive to multiplicative and respects integer powers, and the integral output can be evaluated at π. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

## Proof

1.1 For a series A=sum A_iX^i put w(A)=inf_i(v_F(A_i)+i). Write z-1=X^h u with u∈R⟦X⟧ and s_m=z^(p^m)-1. The elementary congruence s_m≡Δs_(m-1) mod p^m follows inductively from coefficientwise Frobenius and the binomial formula. Thus, for j≥1, Δ^j s=s_(n+j)+sum_(k=1)^j p^(n+k)Δ^(j-k)H_k for some H_k∈X^hR⟦X⟧. Evaluation kills s_(n+j); each other term has valuation at least (n+k)e+p^(j-k)h, strictly greater than e(1+max(j,n)). The last inequality follows by cases: when n≥j use k≥1; when j>n and k≤j-n put r=j-k-n+1 and use p^r>r(p-1); the remaining k satisfy n+k≥j+1. Hence v_F(Δ^j s(π))>e(1+max(j,n)). [given, construct, algebra, cases]

1.2 For 1≤m≤p^n, v_p(binomial(p^n,m))=n-v_p(m). The binomial expansion then gives w(p^(-j)Δ^j s)≥c for every j≥0, and these weights tend to infinity with j: each term is bounded below by (n-r-j)e+p^(r+j)h, r=v_p(m), and the function (n-v)e+p^v h has minimum c at v=n-1,n and tends to infinity. Likewise w(p^n log z)≥c, since the m-th logarithm term is bounded below by (n-v_p(m))e+mh. These statements use the complete weighted series ring in which coefficient valuations plus degrees tend to infinity; multiplication and evaluation at π are continuous. [given, algebra]

2.1 Put a=φ(d)-d and ψ=log(1+s)-s=sum_(m>=2)(-1)^(m-1)s^m/m. Since w(s)≥c, the series ψ converges in the weighted ring and ψ(π)=0. For each j≥0 and m≥2, step 1.2 gives w(p^(-j)Δ^j(s^m/m))≥(m-1)je+mc-e v_p(m)≥(m-1)je+e+mc/p. In particular the weights of the double series defining L(aψ)=sum_j p^(-j)Δ^j(aψ) are uniformly greater than e/(p-1) and tend to infinity with j and m, so its exponential converges in the weighted ring. [step 1.2, given, construct, algebra]

3.1 For j≥1 and m≥2, step 1.1 gives v_F(p^(-n-j)Δ^j(a s^m/m)(π))>e(mM+1-n-j), where M=max(j,n): use v_p(m)≤m-1. Since n+j≤2M and m≥2, the right side is at least e, greater than e/(p-1), and it tends to infinity as j or m tends to infinity. Hence T=sum_(j>=1)p^(-n-j)Δ^j(aψ)(π) converges with valuation greater than e/(p-1). The j=0 value aψ(π) is zero, so step 2.1 and continuity of evaluation give E_X(aψ)(π)=exp(p^n T)=exp(T)^(p^n). This is a p^n-th power. [step 1.1, step 2.1, given, construct, algebra]

4.1 Let ℓ_X(z)=log z-p^(-1)Δ(log z), which belongs to XR⟦X⟧ by [F1]. Formal algebra gives φ(d)ℓ_X(z)-a log z=(1-Δ/p)(d log z). Applying E_X to p^n times this identity yields E_X(p^nφ(d)ℓ_X(z))=E_X(p^n a log z) exp(p^n d log z). By step 1.2, the last exponential converges in the weighted ring; its value at π is 1 because log ζ=0. The identity log(1+s)=p^n log z now gives E_X(p^n a log z)=E_X(as)E_X(aψ). After evaluation, the left side is E_X(φ(d)ℓ_X(z))(π)^(p^n) by [F1], and the second right-hand factor is a p^n-th power by step 3.1. Therefore E_X(as)(π) is a p^n-th power, as claimed. No unramified closure or general trace theorem is invoked. [F1, step 1.2, step 3.1, given, algebra] ∎
