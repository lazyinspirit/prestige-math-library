---
id: fs-maschkes-theorem-without-the-characteristic-hypothesis
kind: false-statement
title: "False statement: Maschke's theorem holds over every field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-z-mod-p-is-a-field, def-finite-dimensional-representation-of-a-group-over-a-field, def-subrepresentation-and-irreducible-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Examples 1.1.4 and 1.1.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Example 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

**False claim.** If $G$ is a finite group and $V$ is a finite-dimensional
representation of $G$ over a field $k$, then every subrepresentation of $V$
has a $G$-invariant complement.

## Facts & Assumptions

**Given:** A prime $p$, the field $k=\mathbb Z/p$, the cyclic group $C_p=\langle g\rangle$, and the matrix $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

[L1] For every prime $p$, the ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L2] A finite-dimensional representation is a group homomorphism into $\operatorname{GL}(V)$, and a subrepresentation is an invariant subspace ([[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-subrepresentation-and-irreducible-representation]]).

## Refutation

**Proof technique:** direct.

1.1 Let $N=J-I$, so $N^2=0$. A short induction gives $J^m=(I+N)^m=I+mN$ for every $m \ge 0$, and in $k=\mathbb Z/p$ this yields $J^p=I$ because $p=0$. Therefore sending the generator $g$ to $J$ defines a two-dimensional representation of $C_p$ over $k$ in the sense of [L2]. The line $L=ke_1$ is invariant because $Je_1=e_1$. [L1, L2, given, algebra]

2.1 Every one-dimensional complement to $L$ has the form $M=k(ae_1+e_2)$ for some $a \in k$. But $$J(ae_1+e_2)=(a+1)e_1+e_2.$$ If this vector lay in $M$, then $(a+1)e_1+e_2=\lambda(ae_1+e_2)$ for some $\lambda \in k$. Comparing the $e_2$-coefficients gives $\lambda=1$, and then comparing the $e_1$-coefficients gives $a+1=a$, impossible in a field. So $L$ has no invariant complement. This refutes the claim. [L2, step 1.1, given, algebra] ∎
