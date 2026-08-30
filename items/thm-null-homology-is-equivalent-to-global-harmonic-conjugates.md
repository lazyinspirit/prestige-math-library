---
id: thm-null-homology-is-equivalent-to-global-harmonic-conjugates
kind: theorem
title: "A plane domain is homologically simply connected exactly when every harmonic function has a global conjugate"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-harmonic-conjugate,
       def-plane-harmonic-function,
       thm-harmonic-conjugate-on-homologically-simply-connected-domains,
       thm-homological-simple-connectivity-equivalences,
       cor-holomorphic-logarithm-has-the-logarithmic-derivative,
       thm-complex-exponential-is-entire-with-derivative-itself,
       thm-complex-exponential-addition-and-real-extension,
       thm-chain-rule-for-complex-derivatives,
       thm-algebra-of-complex-derivatives,
       thm-open-mapping-theorem-holomorphic-functions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 5"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain. Then the following are
equivalent.

1. $\Omega$ is homologically simply connected.
2. Every harmonic function $u:\Omega\to\mathbb R$ has a harmonic conjugate on $\Omega$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$.

[L1] On a homologically simply connected complex domain, every harmonic function has a harmonic conjugate ([[thm-harmonic-conjugate-on-homologically-simply-connected-domains]]).

[L2] For a complex domain, homological simple connectivity is equivalent to the statement that for every point $p\in\mathbb C\setminus\Omega$ the function $z\mapsto1/(z-p)$ has a primitive on $\Omega$ ([[thm-homological-simple-connectivity-equivalences]]).

[L3] A harmonic conjugate of a harmonic function $u$ is a real-valued function $v$ such that $u+iv$ is holomorphic ([[def-harmonic-conjugate]], [[def-plane-harmonic-function]]).

[L4] If $L$ and $h$ are holomorphic with $\exp\circ L=h$, then $L'=h'/h$ ([[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[L5] The complex exponential is entire with derivative itself, satisfies $\exp(z+w)=\exp z\,\exp w$, and compositions and nonvanishing quotients of holomorphic functions are holomorphic ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[L6] A nonconstant holomorphic function on a complex domain is open ([[thm-open-mapping-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Assume condition 1. Then [L1] gives condition 2 immediately. [L1, given]

1.2 Assume condition 2. Fix $p\in\mathbb C\setminus\Omega$ and define [L3, given, choose, construct]
$$u_p(z)=\log|z-p|.$$
Direct differentiation gives
$$\frac{\partial u_p}{\partial x}=\frac{x-\operatorname{Re}p}{|z-p|^2},\qquad \frac{\partial u_p}{\partial y}=\frac{y-\operatorname{Im}p}{|z-p|^2},$$
and then
$$\frac{\partial^2 u_p}{\partial x^2}+\frac{\partial^2 u_p}{\partial y^2}=0$$
on $\Omega$, because $p\notin\Omega$. So $u_p$ is harmonic on $\Omega$. By condition 2 and [L3], choose a harmonic conjugate $v_p$ on $\Omega$ and put
$$F_p=u_p+iv_p,$$
which is holomorphic on $\Omega$.

2.1 The function [step 1.2, L5, L6, algebra]
$$G_p(z)=\frac{\exp(F_p(z))}{z-p}$$
is holomorphic on $\Omega$ by [L5]. Its modulus is
$$|G_p(z)|=\frac{|\exp(F_p(z))|}{|z-p|}=\frac{e^{\operatorname{Re}F_p(z)}}{|z-p|}=\frac{e^{u_p(z)}}{|z-p|}=1,$$
so $G_p(\Omega)$ lies on the unit circle. By [L6], $G_p$ cannot be nonconstant, hence it is constant:
$$G_p(z)\equiv c_p,\qquad |c_p|=1.$$
Therefore $L_p:=F_p-\log c_p$ satisfies $\exp(L_p(z))=z-p$ on $\Omega$.

3.1 By [L4], each $L_p$ from step 2.1 is a primitive of $1/(z-p)$ on $\Omega$. Since $p\in\mathbb C\setminus\Omega$ was arbitrary, condition 4 of [L2] holds for $\Omega$, so [L2] gives condition 1. Together with step 1.1, this proves the equivalence. [step 2.1, L2, L4, discharge-construct] ∎
