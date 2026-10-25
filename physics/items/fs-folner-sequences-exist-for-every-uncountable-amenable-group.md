---
id: fs-folner-sequences-exist-for-every-uncountable-amenable-group
kind: false-statement
title: "FALSE: every uncountable amenable group has a Folner sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-folner-sequence, thm-abelian-groups-are-amenable, thm-folner-criterion-for-amenability, thm-r-uncountable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Every uncountable amenable group admits a **global Folner sequence**, meaning a
sequence $(F_n)_{n\in\mathbb N}$ of finite nonempty subsets such that
$$\frac{|gF_n\triangle F_n|}{|F_n|}\longrightarrow0$$
for every $g$ in the group. This is the natural extension of the countable
definition to a group for which no enumeration is available.

## Facts & Assumptions

**Given:** The false claim above and the ultrafilter lemma.

[L1] For an enumerated countable group, a Folner sequence is indexed by the natural numbers and is almost invariant under each fixed group element ([[def-folner-sequence]]); the Statement explicitly extends that same pointwise condition to arbitrary groups.

[L2] Under the ultrafilter lemma, abelian groups are amenable ([[thm-abelian-groups-are-amenable]]).

[L3] The Folner criterion is a finite-test condition, not a countable-sequence statement for uncountable groups ([[thm-folner-criterion-for-amenability]]).

[L4] The ordered additive group $\mathbb R$ is uncountable ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** direct.

1.1 Let $G=(\mathbb R,+)$. It is abelian and therefore amenable by [L2], and it is uncountable by [L4]. Let $(F_n)$ be any sequence of finite nonempty subsets of $G$, and put $A=\bigcup_n(F_n-F_n)$. Each finite subset of the ordered set $\mathbb R$ has a unique increasing enumeration, so the sets $F_n-F_n$ can be enumerated canonically and $A$ is at most countable. By [L4], choose $g\in\mathbb R\setminus A$. [L2, L4, given, choose]

2.1 For this $g$, one has $(g+F_n)\cap F_n=\varnothing$ for every $n$, since an intersection would put $g$ in $F_n-F_n\subseteq A$. Hence $|(g+F_n)\triangle F_n|=2|F_n|$ and the ratio in [L1] is always $2$, never $0$. Thus $(F_n)$ is not a global Folner sequence. The amenability from step 1.1 does not force a contradiction, because [L3] is only a finite-test criterion and does not supply one countable family for all elements of an uncountable group. Since the sequence was arbitrary, the statement is false. [L1, L3, step 1.1, algebra] ∎
