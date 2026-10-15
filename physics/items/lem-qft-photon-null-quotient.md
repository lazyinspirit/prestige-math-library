---
id: lem-qft-photon-null-quotient
kind: lemma
title: Lorenz auxiliary subsidiary null quotient
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-photon-transverse-space
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.2.1–6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; covariant auxiliary photon modes, subsidiary condition, negative norm and null quotient.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; covariant photon modes, Coulomb gauge and polarization space.
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

## Statement

Assume Countable Choice and use $\mathcal H_T$ from [[def-qft-photon-transverse-space]]. On $\mathcal K=L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^4)$ define
$$[\epsilon,\delta]_\eta=\int_{\mathbb R^3}\epsilon(\mathbf k)^\dagger\eta\,\delta(\mathbf k)\,d^3\mathbf k,\qquad \eta=\operatorname{diag}(-1,1,1,1).$$
For $\mathbf k\ne0$, let $n=\mathbf k/|\mathbf k|$ and set
$$\mathcal K_0=\{\epsilon\in\mathcal K:-\epsilon^0+n\cdot\boldsymbol\epsilon=0\text{ a.e.}\},\qquad T\epsilon=\boldsymbol\epsilon-n\epsilon^0.$$
Then $\mathcal K_0$ is closed, $T:\mathcal K_0\to\mathcal H_T$ is bounded and onto, and
$$[\epsilon,\delta]_\eta=\langle T\epsilon,T\delta\rangle_2\quad(\epsilon,\delta\in\mathcal K_0).$$
Its radical (the vectors pairing to zero with all of $\mathcal K_0$) is
$$\mathcal N=\ker T=\{b(\mathbf k)(1,n(\mathbf k)):b\in L^2(\mathbb R^3)\}.$$
Consequently $\mathcal K_0/\mathcal N$ with the induced form is a positive Hilbert space isometric to $\mathcal H_T$. The form on the four-component auxiliary space is indefinite; only the subsidiary quotient is the positive physical one-particle space.

## Facts & Assumptions

**Given:** Countable Choice and the transverse Hilbert space and projector of [[def-qft-photon-transverse-space]].

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] $P_T(\mathbf k)=I-nn^T$ is an orthogonal projection with closed range $n^\perp$ for almost every $\mathbf k\ne0$. [[def-qft-photon-transverse-space]]

## Proof

**Given:** [A1], [F1], and the componentwise indefinite form in the statement.

1.1 The map $Q:\mathcal K\to L^2(\mathbb R^3)$ defined by $Q\epsilon=-\epsilon^0+n\cdot\boldsymbol\epsilon$ is bounded because $|Q\epsilon|^2\le2(|\epsilon^0|^2+|\boldsymbol\epsilon|^2)$ pointwise. Thus $\mathcal K_0=\ker Q$ is closed. For $\epsilon\in\mathcal K_0$, $n\cdot\boldsymbol\epsilon=\epsilon^0$, so $n\cdot T\epsilon=0$ and $T\epsilon\in\mathcal H_T$ by [F1]. Also $\|T\epsilon\|_2\le\|\boldsymbol\epsilon\|_2+\|\epsilon^0\|_2$, proving boundedness. [A1, F1, given, algebra]

2.1 Write $\boldsymbol\epsilon=T\epsilon+n\epsilon^0$ and $\boldsymbol\delta=T\delta+n\delta^0$. The cross terms in $\boldsymbol\epsilon^\dagger\boldsymbol\delta$ vanish because each $T$ vector is orthogonal to $n$, while the remaining $n$ term is $\overline{\epsilon^0}\delta^0$ and cancels the time component $-\overline{\epsilon^0}\delta^0$ of $\eta$. Hence $[\epsilon,\delta]_\eta=\langle T\epsilon,T\delta\rangle_2$. Given any $u\in\mathcal H_T$, $\epsilon=(0,u)$ belongs to $\mathcal K_0$ and $T\epsilon=u$, so $T$ is onto. [F1, step 1.1, given, algebra]

3.1 The equation $T\epsilon=0$ is equivalent to $\boldsymbol\epsilon=n\epsilon^0$, so $\epsilon=b(1,n)$ with $b=\epsilon^0\in L^2$; each such vector is in $\mathcal K_0$. Step 2.1 shows these vectors pair to zero with every member of $\mathcal K_0$. Conversely, if $\epsilon$ pairs to zero with all of $\mathcal K_0$, choose $\delta=(0,T\epsilon)$, which lies in $\mathcal K_0$ by [F1]; then $0=[\epsilon,\delta]_\eta=\|T\epsilon\|_2^2$, so $T\epsilon=0$. Thus the radical is exactly $\mathcal N$. [F1, step 2.1, given]

4.1 The induced map $\mathcal K_0/\mathcal N\to\mathcal H_T$, $[\epsilon]\mapsto T\epsilon$, is well-defined, injective by the kernel calculation, onto by step 2.1, and preserves the inner product by that same step. It is therefore an isometry onto the complete Hilbert space $\mathcal H_T$, proving positivity and completeness of the quotient. [step 2.1, step 3.1, given] ∎
