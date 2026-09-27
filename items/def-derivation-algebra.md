---
id: "def-derivation-algebra"
kind: "definition"
title: "Derivation of an algebra"
status: draft
origin: "pipeline"
deps: ["def-commutative-ring", "def-left-and-right-modules"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.1"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §22.2.17, p.582"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Definition

Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings
([[def-commutative-ring]]), so that $B$ is an $A$-algebra, and let $M$ be a
$B$-module ([[def-left-and-right-modules]]). An **$A$-derivation of $B$ into
$M$** is a map $D\colon B\to M$ satisfying, for all $b,b'\in B$ and all
$a\in A$, the three laws

$$D(b+b')=D(b)+D(b'),\qquad D(\varphi(a))=0,\qquad D(bb')=b\,D(b')+b'\,D(b).$$

The first law says that $D$ is additive; the second that $D$ is **$A$-constant**
(it kills the image of $A$); the third is the **Leibniz rule**. The set of all
such maps is written $\operatorname{Der}_A(B,M)$. It is a $B$-module under the
pointwise operations $(D+D')(b):=D(b)+D'(b)$ and $(c\cdot D)(b):=c\,D(b)$: the
sum and scalar multiples are again additive $A$-constant maps satisfying
Leibniz, because each law is linear in $D$, and the zero map is a derivation.

Three conventions are part of the definition.

1. **No finiteness.** Nothing is assumed about $B$ as an $A$-algebra: it need not
   be finitely generated, finitely presented, or flat, and $A$ need not be
   Noetherian. The definitions used later on this page are the same ones used
   for the earlier algebraic-differentials interface of this track.
2. **$A$-linearity, not $B$-linearity.** Every $A$-derivation is $A$-linear in
   the sense that $D(\varphi(a)b)=\varphi(a)D(b)$ for $a\in A$, $b\in B$: by
   Leibniz, $D(\varphi(a)b)=\varphi(a)D(b)+b\,D(\varphi(a))$ and the second term
   vanishes. A derivation is in general *not* $B$-linear, and this failure is
   exactly what the Leibniz rule measures; it also shows $D(1)=0$, since
   $1=\varphi(1_A)$ makes $1$ $A$-constant.
3. **Functored variables.** For a fixed ring map $A\to B$ and a $B$-linear map
   $h\colon M\to N$ of $B$-modules, composition $D\mapsto h\circ D$ is a
   $B$-module map $\operatorname{Der}_A(B,M)\to\operatorname{Der}_A(B,N)$.
   Consequently $\operatorname{Der}_A(B,-)$ is a functor from $B$-modules to
   $B$-modules, and the Leibniz rule is preserved by postcomposition with any
   module map.
