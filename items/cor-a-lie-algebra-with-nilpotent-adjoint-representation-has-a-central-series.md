---
id: cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series
kind: corollary
title: Nilpotent adjoint action yields a central series
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-engels-triangularization-theorem, thm-engels-theorem, def-upper-central-series-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 2.8 and Corollary 2.11"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Theorem 2.8 and Corollary 2.11, printed pp. 13–14"
---

## Statement

If every $\operatorname{ad}_x$ is nilpotent on a finite-dimensional Lie
algebra $\mathfrak g$, then there is a finite filtration

$$\mathfrak g=A_0\supset A_1\supset\cdots\supset A_m=0$$

such that $[\mathfrak g,A_i]\subseteq A_{i+1}$ for every $i<m$. Consequently
the upper central series reaches $\mathfrak g$.

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak g$ for which every
$\operatorname{ad}_x$ is nilpotent.

[L1] Engel triangularization gives a flag lowered by a nil representation
([[thm-engels-triangularization-theorem]]).

[L2] Engel's theorem identifies the hypothesis with nilpotence of
$\mathfrak g$ ([[thm-engels-theorem]]).

[L3] The upper central series has $Z_0=0$, and
$[\mathfrak g,B]\subseteq Z_r$ implies $B\subseteq Z_{r+1}$
([[def-upper-central-series-of-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the adjoint representation. If $0=V_0\subset\cdots\subset V_m=\mathfrak g$ is its lowered flag, put $A_i=V_{m-i}$. Then $A_0=\mathfrak g$, $A_m=0$, and $[\mathfrak g,A_i]\subseteq A_{i+1}$. In particular [L2] also confirms that $\mathfrak g$ is nilpotent. [given, L1, L2, algebra]

2.1 We prove $A_{m-r}\subseteq Z_r$ for $0\leq r\leq m$. At $r=0$ this is $A_m=0=Z_0$. If it holds at $r$, then $[\mathfrak g,A_{m-r-1}]\subseteq A_{m-r}\subseteq Z_r$, so [L3] gives $A_{m-r-1}\subseteq Z_{r+1}$. At $r=m$ this yields $\mathfrak g=A_0\subseteq Z_m$, hence equality. For $\mathfrak g=0$, take $m=0$. [L3, step 1.1, algebra] ∎
