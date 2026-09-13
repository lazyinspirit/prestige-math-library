---
id: cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces
kind: corollary
title: Cohomology operations are universal classes on Eilenberg--Mac Lane spaces
status: published
origin: pipeline
deps: ["thm-eilenberg-maclane-spaces-represent-singular-cohomology", "prop-singular-cohomology-is-contravariantly-functorial", "thm-singular-chain-homotopy-formula", "def-stable-natural-cohomology-operation", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Exercise 120 following Theorem 7.22, printed page 182
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 14, universal cohomology class discussion, printed pages 45--47
---

## Statement

Assume AC. Let $A,B$ be abelian groups, let $n\geq1$, and let $r\in\mathbb Z$. Natural cohomology operations on based CW complexes whose basepoint is a vertex

$$ \Theta:\widetilde H^n(-;A)\longrightarrow\widetilde H^{n+r}(-;B) $$

are in bijection with universal classes

$$ u\in\widetilde H^{n+r}(K(A,n);B). $$

The class belonging to $\Theta$ is $u=\Theta_{K(A,n)}(\iota_n)$, and the operation belonging to $u$ is pullback of $u$ along a classifying map. No additivity is assumed. For connected CW complexes with both source and target degrees positive, this is equivalently the ordinary-cohomology statement.

For a family $(\Theta_n)_{n\geq1}$, commutation with reduced cohomology suspension at every **positive source degree** is exactly compatibility of its universal classes with cohomology suspension: if $s_n:\Sigma K(A,n)\to K(A,n+1)$ classifies $\sigma\iota_n$, then, for every $n\geq1$,

$$ \sigma u_n=s_n^*u_{n+1}. $$

A stable operation indexed over all integers in the earlier definition necessarily has these positive-degree identities. They do not by themselves impose its separate degree-zero suspension identity.

## Facts & Assumptions

[F1] Every $x\in\widetilde H^n(X;A)$ has a based classifying map $f:X\to K(A,n)$ with $x=f^*\iota_n$, unique up to based homotopy ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

[F2] Singular cohomology pullback is contravariantly functorial
([[prop-singular-cohomology-is-contravariantly-functorial]]).
For a based homotopy $H:f\simeq g$, the singular-chain prism satisfies
$g_\#-f_\#=\partial P_H+P_H\partial$ in every nonnegative degree
([[thm-singular-chain-homotopy-formula]]).

[F3] Full stability means commutation with reduced cohomology suspension in every integer source degree, including zero ([[def-stable-natural-cohomology-operation]]). Its positive-degree part is the condition characterized here.

[A1] AC is inherited from [F1]'s arbitrary-cell realization and homotopy-extension argument ([[def-axiom-of-choice]]).

## Proof

**Given:** $A,B,n,r$, the category of based CW complexes whose basepoints are
vertices, and [A1].

1.1 If $\Theta$ is natural, set $u=\Theta_{K(A,n)}(\iota_n)$. For $x=f^*\iota_n$ as in [F1], naturality forces [F1, F2]

$$ \Theta_X(x)=\Theta_X(f^*\iota_n)=f^*\Theta_{K(A,n)}(\iota_n)=f^*u. $$

Thus $u$ determines every value of $\Theta$. [F1, F2]

1.2 Conversely, fix $u\in\widetilde H^{n+r}(K(A,n);B)$. Given $x$, choose its classifying map $f$ and define $\Theta_X^u(x)=f^*u$. If $f'$ also classifies $x$, [F1] makes $f$ and $f'$ based-homotopic. For that based homotopy the prism in [F2] preserves chains of the basepoint, so precomposition with it gives a cochain homotopy on the relative singular cochains with arbitrary coefficient group $B$. Thus $f^*u=f'^*u$ in reduced cohomology, including degree zero. Hence the definition is independent of the selected map. [F1, F2]

2.1 For the operation constructed in Step 1.2 and a based map $a:X'\to X$, the composite $fa$ classifies $a^*x$. Therefore [F1, F2, step 1.2]

$$ \Theta_{X'}^u(a^*x)=(fa)^*u=a^*f^*u=a^*\Theta_X^u(x), $$

so $\Theta^u$ is natural. Its value on $\iota_n$, classified by the identity of $K(A,n)$, is $u$. Steps 1.1--2.1 show that the two assignments are inverse bijections. They never use an additive law. [F2, step 1.1, step 1.2]

3.1 Suppose $(\Theta_n)_{n\geq1}$ commutes with suspension in each positive source degree $n$, and write $u_n=\Theta_n(\iota_n)$. This hypothesis holds in particular for the positive-degree part of a fully stable operation [F3]. Apply its suspension identity to $X=K(A,n)$ and $x=\iota_n$. Since $s_n$ classifies $\sigma\iota_n$, naturality from Step 2.1 gives [F2, F3, step 2.1]

$$ \sigma u_n=\Theta_{n+1}(\sigma\iota_n)=\Theta_{n+1}(s_n^*\iota_{n+1})=s_n^*u_{n+1}. $$

[F2, F3]

4.1 Conversely, assume the displayed compatibility from Step 3.1 for every $n\geq1$. For $x=f^*\iota_n$ in positive source degree, naturality of suspension and Step 2.1 give [F2, step 2.1, step 3.1]

$$ \sigma\Theta_n(x)=(\Sigma f)^*\sigma u_n=(\Sigma f)^*s_n^*u_{n+1}=\Theta_{n+1}(\sigma x). $$

Thus suspension commutes with the family at every positive source degree. This does not establish the $n=0$ identity required by full stability in [F3]. For example, with $A=B=\mathbb Z$ and $r=0$, take $\Theta_0=\operatorname{id}$ on $\widetilde H^0$, and $\Theta_n=0$ in all other degrees. Every positive-degree universal class is zero and satisfies the displayed compatibility, but suspension $\widetilde H^0(S^0;\mathbb Z)\to\widetilde H^1(S^1;\mathbb Z)$ is an isomorphism, so the degree-zero identity fails. Reduced and ordinary cohomology agree on connected CW complexes in every positive degree by [F1], giving the ordinary formulation when also $n+r>0$. At target degree zero they differ: for the one-point space, $\widetilde H^0(*;B)=0$ whereas $H^0(*;B)=B$. Zero groups, negative target degree, the one-point space, and the zero universal class are included in the asserted reduced-cohomology result. AC is used only through [F1]. $\square$ [A1, F1, F3, step 2.1, step 3.1]
