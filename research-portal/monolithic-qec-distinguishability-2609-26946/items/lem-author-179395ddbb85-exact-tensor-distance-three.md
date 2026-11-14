---
id: lem-author-179395ddbb85-exact-tensor-distance-three
kind: lemma
domain: mathematics
title: Both selected codes have exact tensor-rank distance three
status: published
origin: session
deps:
  - lem-author-179395ddbb85-low-rank-spin-polynomials
  - lem-author-179395ddbb85-kl-detects-quadratic-spin-errors
  - lem-author-179395ddbb85-two-code-cubic-moments
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-ae-error-span-contract
dependency_roles:
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  lem-author-179395ddbb85-low-rank-spin-polynomials: mathematical-premise
  lem-author-179395ddbb85-kl-detects-quadratic-spin-errors: mathematical-premise
  lem-author-179395ddbb85-two-code-cubic-moments: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

Define the within-block tensor-rank distance of a two-dimensional spin-J code to be the least integer $r\geq0$ for which some component of a rank-r spherical tensor family from $V_J$ to itself has nonscalar compression to the code; use infinity if none exists. Also define its spin-polynomial distance as the least d for which some element of $\mathcal P_d$ has nonscalar compression. If each of the two explicit codes in the cubic-moment lemma has the complete order-one pair-product condition, then both distances equal three for each code. These are explicit error-filtration conventions, not a claim that the original article or the independent Aydin–Barg paper defined a distance metric.

## Facts & Assumptions

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

[F1] Normalized lowering commutators of J_+ cubed give a rank-three family; rank-at-most-two families are quadratic spin polynomials. [[lem-author-179395ddbb85-low-rank-spin-polynomials]]

[F2] The pair-product hypothesis implies scalar compression of all quadratic spin polynomials and all tensor components of rank at most two. [[lem-author-179395ddbb85-kl-detects-quadratic-spin-errors]]

[F3] Both code isometries have zero first moment and the stated unequal cubic diagonal moments. [[lem-author-179395ddbb85-two-code-cubic-moments]]

[F4] The magnetic basis, ladder formulas and defining tensor-family equations use the finite-spin convention. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F5] The complete selected order-one error span and its pair-product correction condition are defined on a finite sum of spin blocks containing the input block, with every selected spin $J'$ satisfying $|J'-J|\leq1$. [[def-qec-prereq-ae-error-span-contract]]

## Proof

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

**Goal:** Establish the stated formula, convergence and qualifications.

1.1 By [F2], the assumed pair-product condition of [F5] gives scalar compression in degrees and tensor ranks zero through two for either code. By [F3], $J_z^3$ has nonscalar compression for both, so their spin-polynomial distances are exactly three. To identify a rank-three witness explicitly, put $Q_3=5J_z^3-[3J(J+1)-1]J_z$. [F2, F3, F5, algebra]

1.2 The zero-weight component of the family in [F1] is a nonzero constant multiple of $(\operatorname{ad}J_-)^3J_+^3$. This operator equals $-24Q_3$. Indeed, on a magnetic basis vector of weight m put $p(m)=J(J+1)-m(m+1)$ and $f(m)=p(m)p(m+1)p(m+2)$. Expanding the three commutators gives diagonal coefficient $f(m)-3f(m-1)+3f(m-2)-f(m-3)=-24[5m^3-(3J(J+1)-1)m]$ by expanding the displayed cubic products. The ladder formulas in [F4] make the same products zero at any invalid endpoint. Thus equality holds on every basis vector. [F1, F4, algebra]

2.1 Since the first-moment compression is zero, [F3] gives compression of $Q_3$ equal to $\operatorname{diag}(-80,80)$ in spin four and $\operatorname{diag}(150,-150)$ in spin five. Both are nonscalar. Step 1.2 therefore exhibits an undetected rank-three tensor component. With the lower bound of step 1.1, both codes have exact tensor-rank distance three, as well as the already proved polynomial distance three. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎
