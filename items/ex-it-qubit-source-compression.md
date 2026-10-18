---
id: ex-it-qubit-source-compression
kind: example
title: Schumacher compression of a diagonal qubit source
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - thm-it-schumacher-quantum-source-coding
  - def-it-von-neumann-entropy
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 18"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Example

For $0\le p\le1$, let $\rho_p=\operatorname{diag}(p,1-p)$ be a qubit source state. Its asymptotic quantum compression threshold is
$$h(p):=-p\ln p-(1-p)\ln(1-p)\quad\text{nats per source qubit},$$
with $0\ln0=0$. Equivalently the threshold is $h_2(p)=h(p)/\ln2$ transmitted qubits per source qubit.

## Facts & Assumptions

**Given:** The diagonal qubit density operator $\rho_p$, $0\le p\le1$.

[F1] [[def-it-von-neumann-entropy]]: $S(\rho)=-\sum_{\lambda_j>0}\lambda_j\ln\lambda_j$, with $0\ln0:=0$; the bit entropy is $S_2=S/\ln2$.

[F2] [[thm-it-schumacher-quantum-source-coding]]: the optimal reliable compression rate of a finite-dimensional IID source is $S(\rho)$ nats per source letter.

## Verification



1.1 The eigenvalues of $\rho_p$ are $p$ and $1-p$. Substitution into the entropy definition [F1] gives $S(\rho_p)=-p\ln p-(1-p)\ln(1-p)$ when $0<p<1$; at $p=0$ or $1$, the zero-term convention gives $S(\rho_p)=0$. [given, F1, cases, algebra]

2.1 Apply the Schumacher theorem [F2] to $\rho_p$. Its threshold is $S(\rho_p)=h(p)$ in nats; dividing by $\ln2$ converts the logarithmic code-dimension rate to bits, hence to qubits sent per source qubit. The endpoint rates are zero, while $p=1/2$ gives $\ln2$ nats, or one qubit per source qubit. [F1, F2, step 1.1, algebra, cases] ∎

