---
id: cex-emg-fx-negative-bound-state
kind: counterexample
title: A negative mode defeats a symmetric-potential bound
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - thm-emg-fx-coupled-potential-energy
dependency_roles:
  thm-emg-fx-coupled-potential-energy: mathematical-premise
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Mihalis Dafermos and Igor Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), full lecture notes"
      url: https://arxiv.org/pdf/0811.0354
      locator: "Appendix D, PDF pp. 103–104, fixes the scalar stress-current convention used by the positive-potential comparison. The explicit negative-potential counterexample is constructed and checked locally."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), full paper"
      url: https://arxiv.org/pdf/1904.04926
      locator: "Sections 1.2–1.4 and 8.1.2, PDF pp. 3–7 and 56–57, show that actual coupled Einstein–Maxwell equations require an explicitly derived system. They do not supply the negative-potential example below."
verification:
  precheck: pass
---

## Statement refuted

For $v:\mathbb R\to\mathbb R^N$, define $\|v\|_2^2:=\int_{\mathbb R}|v|^2\,dx$ and $\|v\|_{H^1}^2:=\int_{\mathbb R}(|v|^2+|v_x|^2)\,dx$.

For every integer $N\ge1$, every smooth real symmetric $N\times N$ matrix potential $V(x)$ on $\mathbb R$, and every smooth solution $U:\mathbb R_t\times\mathbb R_x\to\mathbb R^N$ such that $U(t,\cdot)$ and all its spatial derivatives decay faster than every inverse power of $1+|x|$ locally uniformly in $t$, the solution of
$$U_{tt}-U_{xx}+V(x)U=0$$
has a finite constant $C(V,N)$, depending only on $V$ and $N$, such that
$$\|U(t,\cdot)\|_{H^1(\mathbb R)}+\|U_t(t,\cdot)\|_2\le C(V,N)\bigl(\|U(0,\cdot)\|_{H^1(\mathbb R)}+\|U_t(0,\cdot)\|_2\bigr)\quad(t\ge0).$$

## Statement references

[[thm-emg-fx-coupled-potential-energy]]

## Facts & Assumptions

**Given:** The false assertion above and the abstract positive-potential estimate for scope comparison.

[F1] [[thm-emg-fx-coupled-potential-energy]]: the energy estimate assumes the matrix potential is positive semidefinite; it makes no claim for an indefinite potential.

[A1] It suffices to test the false universal assertion at $N=1$ with a real smooth scalar potential and one solution.

## Counterexample

1.1 Let $\cosh x:=(e^x+e^{-x})/2$, $w(x):=1/\cosh x$, and $V(x):=-2w(x)^2$. These are smooth real functions. Put $\tau(x):=(e^x-e^{-x})/(e^x+e^{-x})$; direct differentiation gives $w'=-w\tau$, $\tau'=1-\tau^2=w^2$, and $w^2=1-\tau^2$. Therefore $w''=w(2\tau^2-1)=w-2w^3$. Inductively each derivative $w^{(k)}$ is $w$ times a polynomial in $\tau$; since $|\tau|\le1$ and $w=O(e^{-|x|})$ at both ends, every derivative decays exponentially. Thus $w\in H^2(\mathbb R)\subset H^1(\mathbb R)\cap L^2(\mathbb R)$. Consequently the differential operator $A:=-\partial_x^2+V(x)$ satisfies $Aw=-w$. [given, A1, algebra]

2.1 Define $U(t,x)=e^t w(x)$. Then $U_{tt}=e^tw$ and $-U_{xx}+VU=e^t(-w''-2w^3)=-e^tw$ by step 1.1. Therefore $U_{tt}-U_{xx}+VU=0$, while
$$\|U(t)\|_{H^1}+\|U_t(t)\|_2=e^t\bigl(\|w\|_{H^1}+\|w\|_2\bigr)\longrightarrow\infty.$$
The initial norm is finite and nonzero, so no time-uniform constant $C(V,N)$ as asserted exists. The example refutes only the claim that symmetry alone suffices; its potential violates the positive-semidefinite hypothesis of the supplied theorem and is not asserted to be an Einstein–Maxwell master potential. [given, F1, step 1.1, algebra] ∎

## Remarks

The positive-potential assumption cannot be deleted from a general wave-energy claim. Establishing the sign and symmetry of an actual coupled gravitational/electromagnetic master system is a separate argument.
