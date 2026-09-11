---
id: ex-a-connection-one-form-on-a-trivial-line-bundle
kind: example
title: "A connection one form on a trivial line bundle"
status: draft
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

For any supplied smooth one-form $a$ on $M$, $\nabla(ue)=(du+au)e$ is a connection on $M\times\mathbb R$, where $e$ is the constant unit frame. Its connection form is $a$. In particular $a=x\,dy$ on $\mathbb R^2$ gives $\nabla_{\partial_x}(ue)=\partial_xu\,e$ and $\nabla_{\partial_y}(ue)=(\partial_yu+xu)e$.

## Facts & Assumptions

**Given:** A smooth one-form $a$ and the specified product line frame.

[F1] A smooth one-form in a global line frame determines a connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

## Verification

1.1 Apply [F1] with the one-by-one matrix $a$. The formula is real-linear, and $d(fu)+a(fu)=df\,u+f(du+au)$ explicitly verifies the one-form Leibniz identity. Applying it to $u=1$ gives $\nabla e=ae$, hence exactly the asserted coefficient. [F1, given]

2.1 For $a=x\,dy$, evaluate on $\partial_x,\partial_y$ to obtain the displayed two derivatives. For example $u=y$ gives $\nabla_{\partial_y}(ye)=(1+xy)e$, which equals $2e$ at $(1,1)$. At $x=0$ this coefficient form vanishes but the derivative of $y$ still contributes $e$. With $a=0$ the connection is $d$; with $u=0$ it is zero. These formulas apply to an empty or zero-dimensional base using the unique empty or zero one-form, and require no choices. [step 1.1] ∎
