---
id: def-gitik-strongly-compact-filter-system-and-class-forcing
kind: definition
title: Gitik's filter system and proper-class forcing
status: draft
origin: pipeline
deps:
  - def-lc-fine-ultrafilters-strong-compactness-and-supercompactness
  - thm-lc-strong-compactness-fine-measures-and-logic
  - def-prikry-forcing-and-direct-extension
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Schürz, Gitik's model, Sections 1–2, pages 2–9"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
    - title: "Dimitriou, Symmetric Models, Chapter 2, Section 5.1, pages 57–60"
      url: https://d-nb.info/1020630655/34
---

## Definition

Work in a transitive model $M$ of ZFC equipped with a class predicate
$W_O$ which globally well-orders $M$, with Replacement allowed for formulas
using $W_O$. Assume that the strongly compact cardinals are unbounded in the
ordinals and have been thinned so that their class has no regular limit point.
List them increasingly as $\langle\kappa_\xi:0<\xi\in\operatorname{Ord}\rangle$
and put $\kappa_0=\omega$ only as a bookkeeping coordinate.

### Coordinate filters

For every infinite regular cardinal $\alpha$, define $\operatorname{cf}'(\alpha)$
and filters as follows.

- If $\alpha<\kappa_1$, put $\operatorname{cf}'(\alpha)=\alpha$ and let
  $\Phi_\alpha$ be the co-bounded filter on $\alpha$.
- If there is a largest strongly compact $\kappa\le\alpha$, call $\alpha$
  **type 1**, put $\operatorname{cf}'(\alpha)=\alpha$, and let $\Phi_\alpha$
  be the $W_O$-least uniform $\kappa$-complete ultrafilter on $\alpha$.
- Otherwise put $\beta_\alpha=\sup\{\kappa:\kappa<\alpha$ is strongly compact$\}$.
  The no-regular-limit-point hypothesis makes $\beta_\alpha$ singular. Call
  $\alpha$ **type 2**, put
  $\operatorname{cf}'(\alpha)=\operatorname{cf}(\beta_\alpha)=\gamma_\alpha$,
  and take the $W_O$-least increasing sequence
  $\langle\kappa^\alpha_\nu:\nu<\gamma_\alpha\rangle$ of strongly compact
  cardinals cofinal in $\beta_\alpha$, with every term at least
  $\gamma_\alpha$. For each $\nu<\gamma_\alpha$, let
  $\Phi_{\alpha,\nu}$ be the $W_O$-least uniform
  $\kappa^\alpha_\nu$-complete ultrafilter on $\alpha$.

The type-2 sequence is “coherent” here only in the stated sense: its completeness
levels follow one fixed cofinal sequence and the index used at $\alpha$ is read
from the $\operatorname{cf}'(\alpha)$ coordinate. No projection coherence or
normality of the $\Phi_{\alpha,\nu}$ is being asserted.

### Stems

For a partial function coded as a set of triples
$p\subseteq\operatorname{Reg}\times\omega\times\operatorname{Ord}$, put

$$\operatorname{dom}_1(p)=\{\alpha:(\exists n,\xi)\ (\alpha,n,\xi)\in p\},\qquad \operatorname{dom}_{1,2}(p)=\{(\alpha,n):(\exists\xi)\ (\alpha,n,\xi)\in p\}.$$

Let $P_1$ be the definable class of such $p$ for which
$\operatorname{dom}_{1,2}(p)$ is finite and, for every
$\alpha\in\operatorname{dom}_1(p)$, the section $p(\alpha)$ is a finite
one-to-one partial function from $\omega$ into $\alpha$. Write $r\approx p$
when $r$ and $p$ agree at every coordinate at least $\kappa_1$.

Let $P_2$ consist of the $p\in P_1$ satisfying:

1. $\operatorname{dom}_1(p)$ is closed under $\operatorname{cf}'$;
2. $\operatorname{dom}(p(\alpha))\subseteq
   \operatorname{dom}(p(\operatorname{cf}'(\alpha)))$ for every coordinate
   $\alpha$; and
3. there are unique $\alpha(p)\in\operatorname{dom}_1(p)$ with
   $\alpha(p)\ge\kappa_1$ and $n(p)<\omega$ such that the high coordinates
   below $\alpha(p)$ have section-domain $n(p)+1$, while those at or above
   $\alpha(p)$ have section-domain $n(p)$.

Thus $(\alpha(p),n(p))$ is the next high-coordinate slot. A $p\in P_2$ is
**extendable** when a proper extension with the same coordinate domain and the
same part below $\kappa_1$ remains in $P_2$. Equivalently, it is extendable iff
$\operatorname{cf}'(\alpha(p))=\alpha(p)$ or
$(\operatorname{cf}'(\alpha(p)),n(p))\in\operatorname{dom}_{1,2}(p)$. For an
extendable $p$, let

$$\Phi_p=\begin{cases}\Phi_{\alpha(p)},&\operatorname{cf}'(\alpha(p))=\alpha(p),\\ \Phi_{\alpha(p),\,p(\operatorname{cf}'(\alpha(p)))(n(p))},&\operatorname{cf}'(\alpha(p))<\alpha(p).\end{cases}$$

### Measure-one trees and the forcing

For $r\approx p$ and $U\subseteq P_2$, write
$T_r^U=\{q\in U:q\restriction\kappa_1=r\restriction\kappa_1\}$. A condition
of Gitik's forcing $P_3$ is a pair $(p,U)$ satisfying all ten clauses below.

1. $p\in P_2$.
2. $U\subseteq P_2$.
3. $p\in U$.
4. Every $q\in U$ extends $p$ as a function and has
   $\operatorname{dom}_1(q)=\operatorname{dom}_1(p)$.
5. If $r\in U$, $r\approx p$, $\alpha\in\operatorname{dom}_1(p)$, and
   $(\alpha,n)$ is an unfilled slot with $\alpha<\kappa_1$, then
   $\{\xi:r\cup\{(\alpha,n,\xi)\}\in U\}\in\Phi_\alpha$.
6. If $r_1,r_2\in U$ both satisfy $r_i\approx p$, then their union belongs to
   $U$ whenever it belongs to $P_1$; moreover, if $r_1\subseteq r_2$, the map
   $q\mapsto q\cup r_2$ embeds $T_{r_1}^U$ into $T_{r_2}^U$.
7. If $q\in U$ and $a\subseteq\kappa_1\times\omega\times\kappa_1$, then
   $p\cup(q\cap a)\in U$.
8. If $q\in U$ is extendable and
   $\operatorname{cf}'(\alpha(q))=\alpha(q)$, its possible next values form a
   member of $\Phi_{\alpha(q)}$.
9. If $q\in U$ is extendable and
   $\operatorname{cf}'(\alpha(q))<\alpha(q)$, its possible next values form a
   member of
   $\Phi_{\alpha(q),q(\operatorname{cf}'(\alpha(q)))(n(q))}$.
10. Every $q\in U$ with $q\not\approx p$ has a predecessor $q^-\in U$ obtained
    by deleting exactly the value last inserted at $(\alpha(q^-),n(q^-))$.

These clauses are the literal tree upper-part obligations: clauses 5, 8 and 9
give measure-one successor sets; clauses 6, 7 and 10 provide amalgamation,
small-coordinate closure and predecessors. For conditions $(q,V)$ and $(p,U)$,
write $(q,V)\le(p,U)$, meaning stronger, when
$\operatorname{dom}_1(q)\supseteq\operatorname{dom}_1(p)$ and
$V\restriction\operatorname{dom}_1(p)\subseteq U$. On a fixed coordinate
domain, a **direct refinement** keeps the trunk fixed and shrinks the upper
tree. More generally a finite support enlargement is a direct support extension
when its trunk restricts to the old trunk and its projected upper tree refines
the old one.

For regular $\theta$, let $P_\theta$ be the restriction whose coordinate
domains lie below $\theta$, adjoining the trivial empty condition when the
restriction has no high coordinate. Because $\operatorname{cf}'(\alpha)\le
\alpha$, regular initial segments are closed under the dependency map. Each
$P_\theta$ is a set forcing; $P_3=\bigcup_{\theta\in\operatorname{Reg}}P_\theta$
is a definable proper class. The ordinary set-forcing theorem is not thereby a
forcing theorem for $P_3$.

## Facts & Assumptions

**Given:** The model, global well-order, strongly compact class and definitions above.

[F1] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]: Strong compactness extends every proper $\kappa$-complete filter on a set to a $\kappa$-complete ultrafilter on that set.

[F2] [[thm-lc-strong-compactness-fine-measures-and-logic]]: Strong compactness is equivalently witnessed by fine $\kappa$-complete ultrafilters on every $P_\kappa(\lambda)$; no supercompactness hypothesis is required here.

[F3] [[def-axiom-of-choice]]: Choice supports the cardinal-size calculations; the separately assumed global well-order selects one filter and one cofinal sequence uniformly at every proper-class coordinate.

## Proof

1.1 The coordinate filters exist with exactly the advertised completeness. For a strongly compact $\kappa\le\alpha$ with $\alpha$ regular, the co-bounded filter on $\alpha$ is proper and $\kappa$-complete: the union of fewer than $\kappa$ sets of size below $\alpha$ still has size below regular $\alpha$. F1 extends it to a $\kappa$-complete ultrafilter, which is uniform because it contains every co-bounded set. Apply this once at type 1 and at every $\kappa^\alpha_\nu$ for type 2, then use $W_O$ to take the least choices. F2 confirms the equivalent fine-measure formulation of the large-cardinal input, but no normal fine measure or supercompactness is smuggled into the selected uniform filters. [F1, F2, F3]

2.1 Finiteness makes the cut in clause 3 of $P_2$ unique: below the cut all high section-domains have the larger common length and from the cut onward all have the smaller common length. Adding the next value preserves clauses 1 and 2 automatically in the type-1 case; in the type-2 case it does so exactly when the index slot at $\operatorname{cf}'(\alpha(p))$ is already filled. This proves both directions of the displayed extendability equivalence and makes $\Phi_p$ well-defined. [step 1.1]

3.1 Clauses 3–10 make every upper part a nonempty predecessor-closed branching system above its trunk, with each required successor set in the filter indexed by step 2.1. A full tree of all legal finite successors above any coherent trunk witnesses nonemptiness. A proposed pruning is an upper part only when it still satisfies every clause, including the union closure in clause 6; shrinking successor sets separately does not by itself prove this. The later pruning arguments therefore use intersections of coherent cone trees to restore clause 6 after their measure-one successor choices. Thus the definition supplies actual conditions without asserting a false blanket closure property. [step 1.1, step 2.1]

4.1 The forcing order is reflexive. It is transitive because restriction composes: if $W\restriction\operatorname{dom}_1(q)\subseteq V$ and $V\restriction\operatorname{dom}_1(p)\subseteq U$, then $W\restriction\operatorname{dom}_1(p)\subseteq U$. A fixed-trunk shrinking which remains an upper part under clauses 3–10 is consequently a direct refinement. For fixed regular $\theta$, all stems and all their upper trees are subsets of sets built from $\theta\times\omega\times\theta$, so $P_\theta$ is a set; unbounded coordinate domains make their union a proper class. [step 2.1, step 3.1] ∎
