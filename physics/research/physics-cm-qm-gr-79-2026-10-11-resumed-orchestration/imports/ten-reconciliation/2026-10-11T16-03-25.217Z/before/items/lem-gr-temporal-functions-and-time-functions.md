---
id: lem-gr-temporal-functions-and-time-functions
kind: lemma
title: "Temporal functions are time functions, and time functions forbid closed causal curves"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, def-differential-of-a-smooth-map, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-countable-choice, def-dependent-choice, def-causal-classification-of-lorentz-vectors, def-absolutely-continuous-function]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: isotone functions (Definition 1.17 printed p. 17), semi-time and time functions (Definitions 1.20-1.21 printed p. 18), temporal functions (Definition 1.22 and Theorem 1.23 printed p. 19), and stable causality, section 4.4 printed pp. 137-141"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the initial value formulation and domains of dependence, printed pp. 119-127 (PDF pp. 126-134)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold, let $u$ be a temporal function
on it in the sense of [[def-gr-causal-conditions-and-global-hyperbolicity]]
clause (e), and write $\nabla u$ for its gradient. Then:

**(a)** $du(v)=g(\nabla u,v)>0$ for every nonzero future causal vector $v$.

**(b)** For every future causal curve $\gamma:I\to M$ in the class of
[[def-gr-causal-curves-and-reachability]], the composite $u\circ\gamma$ is
locally absolutely continuous, its derivative satisfies
$(u\circ\gamma)'(t)>0$ at almost every $t\in I$, and consequently
$$u(\gamma(a))<u(\gamma(b))\qquad\text{whenever }a<b\text{ and }\gamma \text{ is not constant on }[a,b].$$

**(c)** $u$ is a time function on $(M,g,N)$ in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (d); every level
set $u^{-1}(c)$, $c\in\mathbb R$, is achronal; and $(M,g,N)$ is causal and
chronological: it admits no nonconstant future causal curve with equal
endpoints.

## Facts & Assumptions

**Given:** The choice assumptions, a temporal function $u$ with gradient $\nabla u$, a future causal curve $\gamma:I\to M$, and real numbers $a<b$ in $I$.

[L1] An observer is a future-directed unit timelike vector $n$, and for every observer $n$ and every nonzero future causal vector $v$ at the same point one has $-g(n,v)>0$ ([[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-gr-observer-and-rest-space]]).

[L2] The gradient $\nabla u$ exists and is unique with $g(\nabla u,X)=du(X)$ for every smooth vector field $X$, because $g_p$ is nondegenerate; and $du(v)=g(\nabla u,v)$ for every $v\in T_pM$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-differential-of-a-smooth-map]], [[def-gr-smooth-lorentzian-objects]]).

[L3] The temporal condition is $g(\nabla u,\nabla u)<0$ and $du(N)>0$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e)); a vector $w$ with $g(w,w)<0$ and $g(w,N)>0$ is past-directed timelike, and $-w/\sqrt{-g(w,w)}$ is then an observer ([[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

[L4] For a future causal curve $\gamma$, the set of $t\in I$ at which $\gamma'(t)$ exists, is nonzero and is future causal has full measure in $I$; the composite of $\gamma$ with a smooth function on $M$ is locally absolutely continuous and the chain rule holds at almost every $t$ ([[lem-gr-causal-curve-calculus]] clauses (b) and (c), [[def-gr-causal-curves-and-reachability]] clause (b)).

[L5] For $F:[a,b]\to\mathbb R$ absolutely continuous, under the choice assumptions: $F$ is differentiable almost everywhere, $F'\in L^1[a,b]$, and $F(b)-F(a)=\int_a^bF'(t)\,dt$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[def-absolutely-continuous-function]]).

[L6] If $f\ge0$ almost everywhere and $\int f=0$, then $f=0$ almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 (Pairing of the gradient with future causal vectors.) Put $w:=\nabla u$. By [L3], $g(w,w)<0$ and $g(w,N)>0$, so $w$ is past-directed timelike and $n:=-w/\sqrt{-g(w,w)}$ satisfies $g(n,n)=-1$ and $g(n,N)=-g(w,N)/\sqrt{-g(w,w)}<0$; that is, $n$ is an observer. Let $v$ be any nonzero future causal vector; by [L1], $-g(n,v)>0$, that is $g(w,v)/\sqrt{-g(w,w)}>0$, hence $g(w,v)>0$. By [L2] this is $du(v)>0$, which proves (a). [given, L1, L2, L3, algebra]

2.1 (The composite and its derivative.) By [L4] the composite $u\circ\gamma$ is locally absolutely continuous and $(u\circ\gamma)'(t)=du(\gamma'(t))$ at almost every $t$. At every such $t$ at which in addition $\gamma'(t)$ is nonzero and future causal, (a) gives $du(\gamma'(t))>0$; by [L4] the set of such $t$ has full measure, so $(u\circ\gamma)'(t)>0$ almost everywhere, and in particular the derivative is everywhere nonnegative almost everywhere. [step 1.1, L4, given]

3.1 (Strict monotonicity.) Let $a<b$ and suppose that $\gamma$ is not constant on $[a,b]$; restrict $\gamma$ to $[a,b]$, a future causal curve. Put $F:=u\circ\gamma|_{[a,b]}$, which is absolutely continuous by step 2.1, and suppose for contradiction that $F(b)=F(a)$. By [L5] and step 2.1, $0=F(b)-F(a)=\int_a^bF'(t)\,dt$ with $F'\ge0$ almost everywhere, so [L6] gives $F'=0$ almost everywhere on $[a,b]$. On the other hand, the set of $t\in(a,b)$ at which $\gamma'(t)$ is nonzero future causal has full measure in $[a,b]$, and at each such point $F'(t)=du(\gamma'(t))>0$ by (a), so $F'>0$ on a nonempty full-measure set, contradicting $F'=0$ almost everywhere. Hence $F(b)>F(a)$, which is the inequality of (b). [step 2.1, L5, L6, algebra]

4.1 (Time function, achronality and causality.) By step 3.1, $u$ is a time function in the sense of clause (d) of [[def-gr-causal-conditions-and-global-hyperbolicity]]. If $p\ll q$, choose a future timelike curve from $p$ to $q$; it is not constant on its parameter interval, because on a nondegenerate interval it has nonzero future timelike velocity at almost every parameter value ([[def-gr-causal-curves-and-reachability]] clause (b)), so step 3.1 gives $u(p)<u(q)$. Hence two distinct points of a level set $u^{-1}(c)$ are never chronologically related in either direction, that is, every level set is achronal. If $\gamma:[a,b]\to M$ is a nonconstant future causal curve with $\gamma(a)=\gamma(b)$, then $a<b$ and step 3.1 gives $u(\gamma(a))<u(\gamma(b))=u(\gamma(a))$, a contradiction; hence no such curve exists, and $(M,g,N)$ is causal and chronological by clause (a) of [[def-gr-causal-conditions-and-global-hyperbolicity]]. This proves (c) and completes the proof. [step 3.1, given, algebra] ∎

## Remarks

- **Hypotheses.** The proof uses only the temporal condition, the choice assumptions carried by the absolutely continuous fundamental theorem of calculus, and the causal-curve calculus; no completeness, compactness or dynamical hypothesis enters.
- **Sharpness.** The lemma gives no converse: a causal spacetime need not admit a temporal function, and a time function need not be smooth or have timelike gradient; the construction of smooth temporal functions on globally hyperbolic spacetimes is a separate theorem.
