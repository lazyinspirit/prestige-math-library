---
id: cor-dimension-of-level-one-modular-forms
kind: corollary
title: "The dimension of the space of level-one modular forms"
status: published
origin: pipeline
deps:
  - thm-level-one-valence-formula
  - cor-zeros-of-e4-and-e6-at-the-elliptic-points
  - thm-eisenstein-series-are-modular-forms
  - def-level-one-modular-form-and-cusp-form
  - thm-rank-nullity
  - def-kernel-and-image-of-a-linear-map
  - thm-linear-kernel-image-and-injectivity
  - def-rank-and-nullity
  - def-vector-space
  - thm-nonnegative-series-bounded-partial-sums
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for cor-dimension-of-level-one-modular-forms and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-21; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"8cc95545d5b24a6b95af4b488f1a1e85f161ca699bb8804fdf8289f6f5cd6a9f","evidence":["research/frontier-38-owner-30-reader-21.md","research/frontier-38-owner-30-reader-findings-21.json","research/frontier-38-owner-30-dispatch/reader-reader-21.result.json","research/frontier-38-owner-30-step5-hash-21-post-5a.json","research/frontier-38-owner-30-alpha-batch-21-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-21.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/cor-dimension-of-level-one-modular-forms.md","historical_raw_sha256":"22208e4290137b755bde34d795601c8c4eec8b3ce1b4c436b81aa95bc08ef300","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:48:06.077Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Corollary 1 to Proposition 2, printed pp. 10–11, and the corollary to Proposition 4, p. 15."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorem 4.9, printed pp. 51–53; Example 4.14 and Proposition 4.16, pp. 54–55."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Corollary 5.36, printed p. 102 (weight 2k convention)."
---

## Statement

For even $k\ge0$,
$$\dim_{\mathbb C}M_k=\begin{cases}\lfloor k/12\rfloor+1,&k\not\equiv2\pmod{12},\\[2pt] \lfloor k/12\rfloor,&k\equiv2\pmod{12},\end{cases}$$
and $\dim S_k=\dim M_k-1$ for $k\ge4$, while $S_0=0$ and $S_k=0$ for $2\le k<12$. In particular $M_0=\mathbb C$, $M_2=0$, $M_4,M_6,M_8,M_{10}$ are one-dimensional, and $M_{12}$ is two-dimensional. Moreover the forms $E_4^aE_6^b$ with $4a+6b=k$, $a,b\ge0$, are linearly independent.

## Facts & Assumptions

**Given:** The spaces $M_k,S_k$ of level-one modular and cusp forms ([[def-level-one-modular-form-and-cusp-form]]), the valence formula, and the Eisenstein forms $E_4\in M_4$, $E_6\in M_6$ with constant term $1$ at the cusp and zeros only at $\omega$ (for $E_4$, simple) and $i$ (for $E_6$, simple) ([[thm-level-one-valence-formula]], [[thm-eisenstein-series-are-modular-forms]], [[cor-zeros-of-e4-and-e6-at-the-elliptic-points]]).

[F1] Valence: for even $k$ and $0\ne f\in M_k$, $\sum_{P\ne\infty}\operatorname{ord}_P(f)/\nu_P=k/12-\operatorname{ord}_\infty(f)$, all terms nonnegative with $\nu_P\in\{1,2,3\}$ ([[thm-level-one-valence-formula]]).

[F2] The constant-term functional $\varepsilon_\infty:M_k\to\mathbb C$, $f\mapsto F_f(0)=f(\infty)$, is linear and nonzero for $k\ge4$ since $\varepsilon_\infty(E_k)=1$; $S_k=\ker\varepsilon_\infty$ by definition, and rank-nullity gives $\dim S_k=\dim M_k-\dim\operatorname{im}\varepsilon_\infty$ ([[def-level-one-modular-form-and-cusp-form]], [[thm-eisenstein-series-are-modular-forms]], [[def-kernel-and-image-of-a-linear-map]], [[thm-linear-kernel-image-and-injectivity]], [[def-rank-and-nullity]], [[thm-rank-nullity]], [[def-vector-space]]).

[F3] At the class of $\omega$, $\operatorname{ord}(E_4)=1$ and $\operatorname{ord}(E_6)=0$; hence $\operatorname{ord}_\omega(E_4^aE_6^b)=a$ for all $a,b\ge0$ ([[cor-zeros-of-e4-and-e6-at-the-elliptic-points]], [[thm-level-one-valence-formula]]).

## Proof

1.1 Upper bound. Choose $d:=\lfloor k/12\rfloor+1$ distinct non-elliptic classes of points of $\mathfrak H$ if $k\not\equiv2\pmod{12}$, and $d:=\lfloor k/12\rfloor$ such classes if $k\equiv2\pmod{12}$; such classes exist because non-elliptic classes are infinite. Suppose $0\ne f\in M_k$ vanished at all chosen classes. Their total contribution to the valence sum is $N\ge d$ (each has $\nu_P=1$). If $k\not\equiv2\pmod{12}$ then $d=\lfloor k/12\rfloor+1>k/12\ge k/12-\operatorname{ord}_\infty(f)$, contradicting [F1]. If $k\equiv2\pmod{12}$, write $k=12q+2$, so $k/12=q+1/6$ and $d=q$. If $\operatorname{ord}_\infty(f)\ge1$ then the valence sum is at most $q+1/6-1=q-5/6<q\le N$, a contradiction. If $\operatorname{ord}_\infty(f)=0$, let $m=\operatorname{ord}_i(f)$, $r=\operatorname{ord}_\omega(f)$ and $N\ge q$ the contribution of the remaining classes; multiplying the valence identity by $6$ gives $6N+3m+2r=6q+1$, so $m$ is odd and $r\equiv2\pmod3$; hence $m\ge1$, $r\ge2$ and $N+m/2+r/3\ge q+1/2+2/3=q+7/6>q+1/6=k/12$, again contradicting [F1]. Therefore evaluation at the $d$ chosen classes is injective on $M_k$, so $\dim M_k\le d$. [F1, given, algebra]

2.1 Lower bound. If $4a+6b=4a'+6b'=k$ with $a<a'$ then $\operatorname{ord}_\omega(E_4^aE_6^b)=a<a'=\operatorname{ord}_\omega(E_4^{a'}E_6^{b'})$ by [F3], so in a linear relation $\sum_ac_aE_4^aE_6^{b(a)}=0$ the term with least $a$, if its coefficient were nonzero, would give the sum the finite order $a$ at the class of $\omega$; since the sum is identically zero its order is infinite, so $c_a=0$ for the least $a$, and induction gives that all coefficients vanish. Hence the monomials are linearly independent, so $\dim M_k$ is at least their number. The pairs $(a,b)$ with $4a+6b=k$, $a,b\ge0$, are indexed by the integers $a\ge0$ with $a\equiv k\pmod3$ and $a\le k/4$ (then $b=(k-4a)/6\ge0$ is a nonnegative integer). Writing $k=12q+s$ with $s\in\{0,2,4,6,8,10\}$, put $a_0\in\{0,1,2\}$ for the least nonnegative residue of $s$ modulo $3$. The solutions are $a=a_0+3j$ for $0\le j\le\lfloor(k/4-a_0)/3\rfloor$, so their number is $\max(0,\lfloor(k/4-a_0)/3\rfloor+1)=q+1$ for $s=0,4,6,8,10$ and $q$ for $s=2$; this is exactly $\lfloor k/12\rfloor+1$ for $k\not\equiv2\pmod{12}$ and $\lfloor k/12\rfloor$ for $k\equiv2\pmod{12}$. With 1.1 this proves the dimension formula. [F3, step 1.1, given, algebra]

3.1 Cusp forms and examples. For $k\ge4$, $\varepsilon_\infty$ is nonzero and surjective onto $\mathbb C$, so by [F2] $\dim S_k=\dim M_k-1$; for $0\le k<12$ the formula gives $\dim M_k=1$ for $k=0,4,6,8,10$ and $\dim M_2=0$, so $S_k=0$ there (for $k=0,4,6,8,10$ because the kernel of a nonzero functional on a one-dimensional space is zero, for $k=2$ because $M_2=0$, and $S_0\subseteq M_0$). In particular $M_0=\mathbb C$ (the constants lie in $M_0$ and it is one-dimensional), $M_2=0$, $M_4,M_6,M_8,M_{10}$ are one-dimensional, and $M_{12}$ is two-dimensional. All the listed monomial counts are covered by 2.1, which also gives the asserted linear independence. [F2, step 1.1, step 2.1, given, algebra] ∎
