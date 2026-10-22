---
id: lem-nrqmx-projector-bundle-kato-well-definedness
kind: lemma
domain: mathematics
library: mathematics
title: Projected connection and Kato transport are well defined
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-nrqmx-smooth-projector-bundle
dependency_roles:
  def-nrqmx-smooth-projector-bundle: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
    - title: J. E. Avron, R. Seiler, and L. G. Yaffe, Adiabatic Theorems and Applications to the Quantum Hall Effect
      url: https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf
---

## Statement

Let $M$, $d$, and $P$ satisfy [[def-nrqmx-smooth-projector-bundle]], and write $E_P$ for its range family. Then $E_P\to M$ is a rank-$r$ $C^2$ complex vector bundle, and $\nabla s=P\,ds$ is a Hermitian connection on it. For every $C^2$ path $\gamma:[0,1]\to M$, the Kato equation $W'=[P_\gamma',P_\gamma]W$, $W(0)=I_d$, has a unique $C^2$ solution. That solution is unitary and satisfies $P_\gamma(t)W(t)=W(t)P_\gamma(0)$ for every $t\in[0,1]$.

## Facts & Assumptions

**Given:** A finite-dimensional smooth manifold $M$, an integer $d\geq1$, a $C^2$ constant-rank orthogonal projection family $P$, and a $C^2$ path $\gamma:[0,1]\to M$.

[F1] [[def-nrqmx-smooth-projector-bundle]]: $P^2=P=P^*$, its rank is constant, $E_{P,x}=\operatorname{ran}P(x)$, $\nabla s=P\,ds$, and the Kato equation uses $K=[P_\gamma',P_\gamma]$.

## Proof

1.1 Fix $x_0\in M$ and choose an orthonormal basis $e_1,\ldots,e_r$ of $\operatorname{ran}P(x_0)$. The vectors $P(x)e_j$ depend $C^2$ on $x$. Their Gram matrix is the identity at $x_0$, so its determinant remains positive on a neighborhood of $x_0$; hence the vectors remain linearly independent there. Applying the finite Gram–Schmidt formulas uses only sums, products, division by positive norms, and square roots of positive functions, so it gives a $C^2$ orthonormal frame $V(x)=(v_1(x),\ldots,v_r(x))$ for $\operatorname{ran}P(x)$ on that neighborhood. The local bundle chart is $\Phi(x,z)=(x,V(x)z)$, with inverse $\Phi^{-1}(x,v)=(x,V(x)^*v)$; both maps are $C^2$. On an overlap, the frame change is $z\mapsto V_\beta(x)^*V_\alpha(x)z$, a $C^2$ map into the invertible complex matrices, so the transition maps are $C^2$. These charts make $E_P$ a rank-$r$ $C^2$ complex vector bundle. For $r=0$ the bundle is the zero bundle, and for $r=d$ every $P(x)=I_d$ and the bundle is trivial. [given, F1, construct, algebra]

1.2 Along $\gamma$, abbreviate $P_\gamma$ by $P$. Differentiating $P^2=P$ gives $P'P+PP'=P'$ and $PP'P=0$. Therefore $K=P'P-PP'$ is $C^1$, $K^*=-K$, and $[K,P]=P'P+PP'=P'$. Let $M_K=\sup_{t\in[0,1]}\|K(t)\|$, set $V_0(t)=I_d$, and recursively set $V_{n+1}(t)=\int_0^tK(u)V_n(u)\,du$. Induction gives $\|V_n(t)\|\leq(M_Kt)^n/n!$, so $W=\sum_{n=0}^\infty V_n$ converges uniformly and satisfies $W(t)=I_d+\int_0^tK(u)W(u)\,du$. The fundamental theorem of calculus gives $W'=KW$; since $K\in C^1$, also $W\in C^2$. If $Z$ is the difference of two solutions, iteration of $Z(t)=\int_0^tK(u)Z(u)\,du$ gives $\|Z(t)\|\leq\sup_{[0,1]}\|Z\|(M_Kt)^n/n!$ for every $n$, whose right side tends to zero, so $Z=0$. [given, F1, construct, algebra]

2.1 For a $C^1$ scalar function $f$ and a $C^1$ section $s$ with $Ps=s$, the product rule gives $\nabla(fs)=P\,d(fs)=P(df\,s+f\,ds)=df\,s+f\nabla s$, so $\nabla$ satisfies the connection Leibniz rule. For two such sections $s,t$, $d(s^*t)=(P\,ds)^*t+s^*(P\,dt)$ because $P=P^*$ and $Ps=s$, $Pt=t$; thus $\nabla$ preserves the Hermitian fiber metric. [F1, step 1.1, algebra]

3.1 Differentiation yields $(W^*W)'=W^*(K^*+K)W=0$, hence $W^*W=I_d$; a square matrix with a left inverse is invertible, so $W$ is unitary. Also $(W^*PW)'=W^*(P'-[K,P])W=0$, so $W(t)^*P(t)W(t)=P(0)$. Multiplying by $W(t)$ on the left gives $P(t)W(t)=W(t)P(0)$, as required. [F1, step 1.2, algebra] ∎

