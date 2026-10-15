---
id: ex-a-nonabelian-double-has-noncommutative-cross-relations
kind: example
title: "A nonabelian group makes the double cross-relations noncommutative"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 14
deps:
  - ex-drinfeld-double-of-a-finite-group
  - thm-hh-double-modules-and-yetter-drinfeld-modules
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, Exercise 42"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
---

## Example

In $D(kS_3)$ let $p=(12)$, $q=(23)$ and $r=(13)=pqp^{-1}$. Then $(\delta_r\otimes p)$ and $(\delta_q\otimes e)$ do not commute. On the Yetter–Drinfeld module $kS_3$ with basis $u_x$, degree $x$ and conjugation action, the braiding sends $u_p\otimes u_q$ to $u_r\otimes u_p$, which differs from the ordinary flip.

## Facts & Assumptions

**Given:** The group-double multiplication and Yetter–Drinfeld braiding, and the transpositions $p,q,r$ in $S_3$. Verify the two products and the stated braiding value.

[L1] [[ex-drinfeld-double-of-a-finite-group]]: $(\delta_x\otimes g)(\delta_y\otimes h)=\mathbf1_{x=gyg^{-1}}\delta_x\otimes gh$.

[L2] [[thm-hh-double-modules-and-yetter-drinfeld-modules]]: $c(v\otimes w)=\sum v_{-1}\cdot w\otimes v_0$.

[A1] In $S_3$, $pqp^{-1}=r=(13)$, $q\ne r$, and $p^{-1}=p$.

## Verification


1.1 The product formula [L1] gives $(\delta_r\otimes p)(\delta_q\otimes e)=\delta_r\otimes p$, since $r=pqp^{-1}$. Reversing the factors gives $(\delta_q\otimes e)(\delta_r\otimes p)=0$, since $q\ne r$. Thus these elements do not commute. [given, A1, L1, algebra]

2.1 Define $u_x$ to have degree $x$ and let $g\cdot u_x=u_{gxg^{-1}}$. This action preserves the grading by conjugation, so it is a Yetter–Drinfeld module by the group case of [L2]. Its braiding is $c(u_p\otimes u_q)=u_{pqp^{-1}}\otimes u_p=u_r\otimes u_p$, whereas the ordinary flip gives $u_q\otimes u_p$. These tensors differ because $r\ne q$. [A1, L2, algebra] ∎
