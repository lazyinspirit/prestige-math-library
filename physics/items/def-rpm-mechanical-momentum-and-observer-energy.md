---
id: def-rpm-mechanical-momentum-and-observer-energy
kind: definition
title: "Mechanical momentum and observer energy"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-rpm-massive-test-particle-action, post-rpm-null-test-particle-action, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition]
dependency_roles:
  post-rpm-massive-test-particle-action: physical-assumption
  post-rpm-null-test-particle-action: physical-assumption
  def-gr-observer-and-rest-space: formulation-prerequisite
  lem-gr-observer-projection-decomposition: mathematical-premise
physical_scope: "Definitions of point-particle momentum and observer-relative energy in the adopted massive and null test sectors; no conservation or empirical claim."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 four-momentum and Ch. 3 particle action"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §§1.1–1.2"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Definition

Use the massive and null sectors as separately adopted in [[post-rpm-massive-test-particle-action]] and [[post-rpm-null-test-particle-action]]. For a massive body of constant mass $m>0$, its **mechanical four-momentum** is $P=mU$, where along an admissible $C^2$ future timelike trajectory $x:I\to M$, with $I\subseteq\mathbb R$ an interval with nonempty interior and parameter $s$, put $T=dx/ds$, and $U:=cT/\sqrt{-g(T,T)}$ is its future tangent normalized by $g(U,U)=-c^2$. The clock convention in the massive-sector adoption gives $d\tau/ds=\sqrt{-g(T,T)}/c$, so $U=dx/d\tau$. In the null sector, the mechanical four-momentum is the separately specified nonzero future-null vector $P$ from the einbein formulation; no null proper time or $P=mU$ is defined.

At an event, for any observer $n$ of [[def-gr-observer-and-rest-space]], define the spatial momentum and observer energy by

$$q_n(P):=P+g(P,n)n\in n^\perp,\qquad E_n(P):=-c\,g(P,n).$$

The projection identity and positive-definiteness of $n^\perp$ are supplied by [[lem-gr-observer-projection-decomposition]]. With SI units, $P$ has units kg m s$^{-1}$, $q_n$ has the same units, and $E_n$ has units joules. This definition is pointwise and does not assert conservation, positivity, or an energy interpretation for an arbitrary vector field that is not an observer.
