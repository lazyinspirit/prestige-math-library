---
id: cor-zeros-of-e4-and-e6-at-the-elliptic-points
kind: corollary
title: "The zeros of E4 and E6 at the elliptic points"
status: published
origin: pipeline
deps:
  - thm-level-one-valence-formula
  - thm-eisenstein-series-are-modular-forms
  - def-level-one-eisenstein-series
  - thm-standard-fundamental-domain-for-the-modular-group
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-21.md; immutable carrier: research/frontier-38-owner-30-step5-hash-21-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-21 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Example 4.15, printed p. 54: simple zeros of G2 at rho and G3 at i in Milne’s weight-2k notation."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 2, printed pp. 9–10, and the expansions of E4,E6, p. 17: ingredients for the local deduction."
---

## Statement

$E_4$ has a simple zero at the class of $\omega=e^{2\pi i/3}$ and no other zeros; $E_6$ has a simple zero at the class of $i$ and no other zeros. In particular $E_4$ and $E_6$ are nonzero modular forms with $E_4(\infty)=E_6(\infty)=1$, and $E_4$ does not vanish at $i$ while $E_6$ does not vanish at $\omega$.

## Facts & Assumptions

**Given:** The Eisenstein series $E_4\in M_4$, $E_6\in M_6$ with $E_4(\infty)=E_6(\infty)=1$ ([[thm-eisenstein-series-are-modular-forms]], [[def-level-one-eisenstein-series]]), and the valence formula ([[thm-level-one-valence-formula]]).

[F1] In the valence formula $\sum_P\operatorname{ord}_P(f)/\nu_P+\operatorname{ord}_\infty(f)=k/12$, each summand $\operatorname{ord}_P(f)/\nu_P$ is either $0$ or at least $1/\nu_P$; the elliptic classes have $\nu_i=2$ and $\nu_\omega=\nu_{\omega+1}=3$, all other classes have $\nu_P=1$ ([[thm-level-one-valence-formula]], [[thm-standard-fundamental-domain-for-the-modular-group]]).

## Proof

1.1 For $E_4$, $k/12=1/3$ and $\operatorname{ord}_\infty(E_4)=0$ because $E_4(\infty)=1\ne0$, so $\sum_P\operatorname{ord}_P(E_4)/\nu_P=1/3$. Every nonzero summand is at least $1/3$ by [F1], with equality exactly for a simple zero at a class with $\nu_P=3$, and the doubles $1/2,2/3,\dots$ and the integers $1,2,\dots$ are all strictly larger than $1/3$. Hence exactly one summand is nonzero, namely a simple zero at a class with $\nu_P=3$, and the only such class is that of $\omega$. So $E_4$ vanishes simply at the class of $\omega$ and nowhere else; in particular it does not vanish at $i$. [F1, given, algebra]

2.1 For $E_6$, $k/12=1/2$ and $\operatorname{ord}_\infty(E_6)=0$, so $\sum_P\operatorname{ord}_P(E_6)/\nu_P=1/2$. A nonzero summand at the class of $\omega$ would be at least $1/3$, leaving a total of at most $1/6$ to be supplied by the remaining summands, of which every nonzero one is at least $1/2$ (at $i$) or $1$ (non-elliptic); this is impossible, so the class of $\omega$ is not a zero. The total $1/2$ must then be a single summand at $i$ (any non-elliptic zero contributes at least $1$), and it equals $1/2$ exactly for a simple zero at $i$. Hence $E_6$ vanishes simply at the class of $i$ and nowhere else, in particular not at $\omega$. [F1, step 1.1, given, algebra] ∎
