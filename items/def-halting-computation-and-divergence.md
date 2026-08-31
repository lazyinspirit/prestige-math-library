---
id: def-halting-computation-and-divergence
kind: definition
title: "Finite computation histories, halting computations, and divergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-initial-accepting-and-rejecting-configurations
  - def-one-step-configuration-relation
  - def-sequence
justified_by: []
verification:
  precheck: n/a
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 10: The Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf"
---

## Definition

Fix a deterministic one-tape Turing machine
$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$ and
an input word $w\in\Sigma^*$.

A **finite computation history** of $M$ on input $w$ is a finite list of
configurations
$$ C_0,C_1,\dots,C_n $$
such that $C_0=I_M(w)$ and
$$ C_i\vdash_M C_{i+1}\qquad(0\le i<n). $$

Such a history is:

- **accepting** if $C_n$ is an accepting configuration,
- **rejecting** if $C_n$ is a rejecting configuration,
- **halting** if it is accepting or rejecting.

We say that **$M$ halts on $w$** if there exists a halting computation history
of $M$ on $w$.

We say that **$M$ diverges on $w$** if there is no halting computation history
of $M$ on $w$.

For a halting configuration $C=(q,h,t)$ and a word $u=a_0\cdots a_{m-1}$ over
$\Gamma\setminus\{\sqcup\}$, we say that **$C$ outputs $u$** when
$$ t(i)=\begin{cases} a_i,&0\le i<m,\\ \sqcup,&i\ge m. \end{cases} $$
So the tape contains exactly $u$ followed by blanks.

## Remarks

- On a deterministic machine there is at most one possible next configuration
  from a nonhalting configuration, but the definition of divergence here is
  simply "no halting computation history exists."

- The output convention is intentionally strict: the final nonblank tape segment
  must be exactly the displayed word, with no later nonblank cells.
