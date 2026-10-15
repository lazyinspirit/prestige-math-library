---
id: ex-rpm-null-scale
kind: example
title: "One null ray with distinct momentum scales"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
deps: [pthm-rpm-free-massive-and-null-geodesics, def-rpm-mechanical-momentum-and-observer-energy]
dependency_roles:
  pthm-rpm-free-massive-and-null-geodesics: physical-result
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
physical_scope: "Algebraic illustration of affine-parameter and momentum-scale freedom for a null test-particle ray; no scale is inferred from the unparameterized image."
sources:
  references:
    - title: "David Tong, String Theory, complete lecture notes, §1.1.2 einbein and reparametrization"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 null geodesics"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

In a prescribed background, let $I\subseteq\mathbb R$ be a nonempty open interval and let $x:I\to M$ be an affinely parametrized nonzero future-null free geodesic with momentum $P=dx/d\lambda$. For any constant $a>0$, on the rescaled open interval $I/a:=\{\lambda/a:\lambda\in I\}$ the same ray image admits momentum $P_a=aP$ using the affine parameter $\lambda_a=\lambda/a$.

## Facts & Assumptions

**Given:** A null free trajectory from [[pthm-rpm-free-massive-and-null-geodesics]], a positive constant $a$, and, at any chosen $\lambda_0\in I$, an observer $n$ at the event $x(\lambda_0)$.

[F1] A null free particle has $dx/d\lambda=P$ and nonzero future-null momentum ([[pthm-rpm-free-massive-and-null-geodesics]]).

[F2] Observer energy is $E_n(P)=-c\,g(P,n)$ ([[def-rpm-mechanical-momentum-and-observer-energy]]).

## Verification

1.1 Define $x_a(\lambda_a)=x(a\lambda_a)$. Then $dx_a/d\lambda_a=aP=:P_a$, which remains nonzero future null. Since $D_\lambda P=0$, the constant rescaling also gives $D_{\lambda_a}P_a=0$; the image of $x_a$ equals the image of $x$. Thus both parameterizations satisfy the free null equations of [F1]. [given, F1, construct, algebra]

2.1 For any $\lambda_0\in I$, the rescaled curve satisfies $x_a(\lambda_0/a)=x(\lambda_0)$ and $P_a(\lambda_0/a)=aP(\lambda_0)$. For an observer $n$ at this common event, [F2] gives $E_n(P_a)=aE_n(P)$. Hence the same unparameterized ray supports distinct positive momentum and energy scales; the path image alone does not select one. [step 1.1, F2, algebra] ∎
