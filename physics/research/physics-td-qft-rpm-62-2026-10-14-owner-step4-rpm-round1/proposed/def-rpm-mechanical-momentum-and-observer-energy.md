---
id: def-rpm-mechanical-momentum-and-observer-energy
kind: definition
title: "Mechanical momentum and observer energy"
status: draft
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
  precheck: n/a
---

## Definition

Use the massive and null sectors as separately adopted in [[post-rpm-massive-test-particle-action]] and [[post-rpm-null-test-particle-action]]. For a massive body of constant mass $m>0$, its **mechanical four-momentum** is $P=mU$, where, for its adopted $C^2$ future timelike curve $x(s)$ with $T=dx/ds$, $U:=cT/\sqrt{-g(T,T)}=dx/d\tau$ is the proper-time tangent and satisfies $g(U,U)=-c^2$. In the null sector, the mechanical four-momentum is the separately specified nonzero future-null vector $P$ from the einbein formulation; no null proper time or $P=mU$ is defined.

At an event, for any observer $n$ of [[def-gr-observer-and-rest-space]], define the spatial momentum and observer energy by

$$q_n(P):=P+g(P,n)n\in n^\perp,\qquad E_n(P):=-c\,g(P,n).$$

The projection identity and positive-definiteness of $n^\perp$ are supplied by [[lem-gr-observer-projection-decomposition]]. With SI units, $P$ has units kg m s$^{-1}$, $q_n$ has the same units, and $E_n$ has units joules. This definition is pointwise and does not assert conservation, positivity, or an energy interpretation for an arbitrary vector field that is not an observer.
