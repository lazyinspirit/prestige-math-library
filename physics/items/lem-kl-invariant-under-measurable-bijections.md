---
id: lem-kl-invariant-under-measurable-bijections
kind: lemma
title: "KL is invariant under a measurable bijection"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-kullback-leibler-divergence
  - def-measurable-function-between-measurable-spaces
  - thm-change-of-variables-for-expectation
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the Radon–Nikodym definition of general KL."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.2"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 3 §3.1"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/486b7d83cc428acf75b74323ecafcc11_MIT6_441S16_chapter_3.pdf"
---

## Statement

Let $\phi:(E,\mathcal E)\to(F,\mathcal F)$ be a measurable bijection with measurable inverse. For probability measures P,Q on E, let $\phi_\#P,\phi_\#Q$ be their push-forwards. Then
$$D(\phi_\#P\|\phi_\#Q)=D(P\|Q).$$

## Facts & Assumptions

**Given:** AC, the measurable isomorphism $\phi$, and probability measures P,Q on E.

[A1] AC supplies the Radon–Nikodym density in the absolutely continuous branch of KL. [[def-axiom-of-choice]]

[F1] KL is $+\infty$ outside absolute continuity; under absolute continuity it is the integral of the log Radon–Nikodym density. [[def-kullback-leibler-divergence]]

[F2] Push-forward integration satisfies $\int g\,d(\phi_\#P)=\int g\circ\phi\,dP$ for every nonnegative measurable g, and for integrable signed g. [[thm-change-of-variables-for-expectation]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $P\not\ll Q$, choose E_0 with $Q(E_0)=0<P(E_0)$. Since $\phi^{-1}$ is measurable, $\phi(E_0)=(\phi^{-1})^{-1}(E_0)$ is measurable; then $\phi_\#Q(\phi(E_0))=0<\phi_\#P(\phi(E_0))$. Both divergences are $+\infty$ by [F1]. [F1, given, choose]

1.2 If $P\ll Q$, let $r=dP/dQ$. [given]
The function $s=r\circ\phi^{-1}$ is measurable. For every B in F,
$$\int_Bs\,d(\phi_\#Q)=\int_{\phi^{-1}(B)}r\,dQ=P(\phi^{-1}(B))=\phi_\#P(B),$$
so s is a Radon–Nikodym density of $\phi_\#P$ with respect to $\phi_\#Q$. By [F2], the push-forward integral identity applies separately to the nonnegative functions $(\ln s)^+$ and $(\ln s)^-$; the negative-part integrals are finite by [F1]. Therefore
$$D(\phi_\#P\|\phi_\#Q)=\int(\ln s)^+d(\phi_\#P)-\int(\ln s)^-d(\phi_\#P)=\int(\ln r)^+dP-\int(\ln r)^-dP=D(P\|Q),$$
including the case where the positive-part integral is $+\infty$. [A1, F1, F2, given, algebra] ∎
