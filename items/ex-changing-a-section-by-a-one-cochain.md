---
id: ex-changing-a-section-by-a-one-cochain
kind: example
title: "Changing a section by a one-cochain"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normalized-set-theoretic-section-and-factor-set, lem-changing-the-section-changes-the-factor-set-by-a-coboundary]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Example

In the direct-product extension

$$0\to\mathbb Z\to\mathbb Z\times C_2\to C_2\to0,$$

the standard section has zero factor set, while changing the nontrivial value by
the one-cochain $u(t)=1$ produces a new factor set with $f'(t,t)=2$.

## Facts & Assumptions

**Given:** The direct-product extension $\mathbb Z\times C_2$ with trivial
action.

[F1] The factor set of a section is defined by the equation
$s(g)s(h)s(gh)^{-1}=i(f_s(g,h))$
([[def-normalized-set-theoretic-section-and-factor-set]]).

[L1] Changing the section changes the factor set by a coboundary
([[lem-changing-the-section-changes-the-factor-set-by-a-coboundary]]).

## Verification

**Proof technique:** direct.

1.1 For the standard section $s(t)=(0,t)$, the equality in [F1] gives $f_s=0$ because $(0,t)^2=(0,1)$. [F1, given, algebra]

2.1 Replace the section by $s'(t)=(1,t)$. Then $(1,t)^2=(2,1)$, so [F1] gives $f_{s'}(t,t)=2$ and $f_{s'}(1,t)=f_{s'}(t,1)=0$. Thus $f_{s'}=\delta u$ for the one-cochain with $u(t)=1$. [F1, L1, step 1.1, algebra]

3.1 This makes the section-change formula visible in a concrete computation. [step 2.1] ∎
