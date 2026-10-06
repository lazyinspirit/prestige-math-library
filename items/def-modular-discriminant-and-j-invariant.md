---
id: def-modular-discriminant-and-j-invariant
kind: definition
title: "The modular discriminant and the j-invariant"
status: published
origin: pipeline
deps:
  - lem-discriminant-is-a-nonvanishing-cusp-form
  - thm-eisenstein-series-are-modular-forms
  - def-level-one-eisenstein-series
  - thm-level-one-valence-formula
  - cor-zeros-of-e4-and-e6-at-the-elliptic-points
  - def-level-one-modular-form-and-cusp-form
  - def-meromorphic-function-complex-domain
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post-5a.json"
    content_sha256: "4a70abe04d34180e60b562508316a3b3ced735d454d4cfab39e0e5a2ed830ef3"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Ch. 4, 'The function j', printed pp. 56-58."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "§2.4, equations (22)-(24), printed pp. 20-22."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, Theorem 5.42, printed pp. 103–104: J=g2^3/(g2^3-27g3^2) and j=1728J."
---

## Definition

The **modular discriminant** is

$$\Delta(\tau):=\frac{E_4(\tau)^3-E_6(\tau)^2}{1728},$$

a cusp form of weight $12$ with $q$-expansion $q-24q^2+O(q^3)$ and without
zeros on $\mathfrak H$ ([[lem-discriminant-is-a-nonvanishing-cusp-form]],
[[thm-eisenstein-series-are-modular-forms]]). The **$j$-invariant** is the
quotient

$$j(\tau):=\frac{E_4(\tau)^3}{\Delta(\tau)},\qquad \tau\in\mathfrak H,$$

which is holomorphic on $\mathfrak H$ because $\Delta$ does not vanish there
([[def-meromorphic-function-complex-domain]]). Since $E_4^3$ and $\Delta$ both
transform with the factor $(c\tau+d)^{12}$ under every $\gamma\in SL_2(\mathbb
Z)$, the quotient satisfies $j(\gamma\cdot\tau)=j(\tau)$
([[def-level-one-modular-form-and-cusp-form]]).

**The $q$-expansion and the cusp.** From $E_4^3=1+720q+O(q^2)$ and
$\Delta=q(1-24q+O(q^2))$ ([[thm-eisenstein-series-are-modular-forms]],
[[lem-discriminant-is-a-nonvanishing-cusp-form]]),

$$j(\tau)=q^{-1}\frac{1+720q+O(q^2)}{1-24q+O(q^2)}=q^{-1}+744+O(q),$$

so $j$ has a simple pole at the cusp: its associated function of $q$ is
meromorphic at $q=0$ with a pole of order one. The special values follow from
the zeros of $E_4,E_6$ ([[cor-zeros-of-e4-and-e6-at-the-elliptic-points]]):
$E_6(i)=0$ and $E_4(i)\ne0$ give $j(i)=\frac{E_4(i)^3}{E_4(i)^3/1728}=1728$, while
$E_4(\omega)=0$ gives $j(\omega)=0$; the valence formula
([[thm-level-one-valence-formula]]) is what makes these the only relevant
zeros.
