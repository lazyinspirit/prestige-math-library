---
id: thm-small-forcing-does-not-create-measurable-cardinals
kind: theorem
title: Small forcing does not create measurable cardinals
status: published
origin: pipeline
deps: [def-ultrafilter, thm-ultrafilter-characterisation, thm-forcing-theorem, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - {title: "Joel David Hamkins, Gap Forcing, complete Gap Forcing Theorem proof and Corollaries 11–12, pp. 3–11", url: "https://arxiv.org/pdf/math/9808011"}
---

## Statement

Assume ZFC. Let $P$ be a forcing notion in $V$, let $G\subseteq P$ be
$V$-generic, and let $\kappa$ be an uncountable cardinal such that
$|P|^V<\kappa$. If $V[G]$ regards $\kappa$ as measurable, then $V$ already
regards $\kappa$ as measurable.

Here, locally, **measurable** means that $\kappa$ is uncountable and carries a
nonprincipal ultrafilter closed under intersections of length less than
$\kappa$. The proof also establishes the auxiliary equivalence it uses: such
an ultrafilter yields a definable elementary embedding into a transitive class
with critical point $\kappa$, and any such embedding yields a measure by the
seed $\kappa$.

## Facts & Assumptions

**Given:** The ground model $V$, forcing $P$, generic $G$, and cardinal $\kappa$ in the statement. ZFC, including Choice, is assumed in both the ground and its forcing extension.

[F1] [[def-ultrafilter]] and [[thm-ultrafilter-characterisation]] give the properness, complement-decision, finite-intersection, upward-closure, principality, and nonprincipality laws. In this item, $\kappa$-complete means closed under intersections indexed by every ordinal below $\kappa$, including the empty intersection.

[F2] [[thm-forcing-theorem]] supplies the definable forcing relation, truth lemma, and persistence used in the restriction argument.

[F3] [[def-axiom-of-choice]] supplies the cardinal comparisons, enumerations, elementary submodels, and ultrapowers used below.

## Proof

**Proof technique:** the no-new-measurables half of the Lévy--Solovay theorem, proved through the small-forcing case of the gap-forcing restriction argument.

1.1 The trivial-forcing case is immediate, so suppose $P$ is nontrivial and replace it by an isomorphic forcing on an ordinal of size $\mu=|P|^V$. A measure on $\kappa$ is uniform: if $A$ in the measure had size $\lambda<\kappa$, intersecting the complements of its $\lambda$ singletons would both retain $A$ and make the intersection empty. Uniformity and $\kappa$-completeness make $\kappa$ regular, since the bounded pieces of a cofinal partition of length below $\kappa$ would all be measure-small. They also make $\kappa$ a strong limit: if $\kappa\le 2^\lambda$ for $\lambda<\kappa$, choose $\kappa$ distinct binary subsets of $\lambda$; for every coordinate take the bit occurring on a measure-one set and intersect these fewer than $\kappa$ sets. The intersection has at most one member, contradicting uniformity. Thus $\kappa$ is strongly inaccessible in $V[G]$. Forcing of size $\mu$ is $\mu^+$-cc and preserves cardinals at and above $\mu^+$, so $\kappa$ is also a ground cardinal. Choose a regular ground cardinal $\delta$ with $$ \mu<\delta<\delta^+<\kappa. $$ [F1, F3]

1.2 We give the ultrapower facts needed later. From a nonprincipal $\kappa$-complete ultrafilter $U$ on $\kappa$, form the ultrapower using functions $\kappa\to V[G]$. Łoś's induction uses F1 and the witness choices supplied by F3. It is well-founded: an external descending omega-sequence would, by countable completeness, give one coordinate carrying an infinite descending sequence of ordinals. After transitive collapse, the constant-function map $j:V[G]\to\overline M$ is elementary, fixes every ordinal below $\kappa$, and moves $\kappa$, so its critical point is $\kappa$. The derived measure $W=\{A\subseteq\kappa:\kappa\in j(A)\}$ is normal: for a regressive $f$ on a $W$-large set, $j(f)(\kappa)<\kappa$ is fixed by $j$, and its fibre is $W$-large. Take the ultrapower by $W$ and again call its collapsed map $j$. Its target is closed under $\kappa$-sequences from $V[G]$: given $x_\alpha=[f_\alpha]_W$ for $\alpha<\kappa$, use F3 to choose the representatives and define $F(\xi)=\langle f_\alpha(\xi):\alpha<\xi\rangle$. Normality identifies the seed $[\mathrm{id}]_W$ with $\kappa$, and $j(F)(\kappa)(\alpha)=x_\alpha$ for every $\alpha<\kappa$, so the entire sequence belongs to the target. Conversely, for any definable elementary $j$ into a transitive class with critical point $\kappa$, the same seed formula defines a set-sized nonprincipal $\kappa$-complete ultrafilter: elementarity gives complement decision and intersections, and $j$ fixes all singleton indices below $\kappa$. [F1, F3, construct]

2.1 Thus forcing by $P$ is forcing with a gap at $\delta$: the initial forcing has size below $\delta$ and the tail forcing is trivial, hence $\leq\delta$-strategically closed. [F1, F3, step 1.1]

3.1 By step 1.2, in $V[G]$ take a normal-measure ultrapower $j:V[G]\longrightarrow \overline M$ with critical point $\kappa$. The transitive target is closed under $\kappa$-sequences of the extension and hence under $\delta$-sequences. As in the general setup of the Gap Forcing Theorem, define the ground part $M=\bigcup_{\alpha\in\mathrm{Ord}}j(V_\alpha^V)$, taking the transitive collapse implicit in this notation. Then $j\mathbin{\upharpoonright}V:V\to M$, $j(G)$ is $M$-generic, and $\overline M=M[j(G)]$. By the ordinal presentation chosen in step 1.1, $P\in V_\kappa$, so $j(P)=P$; the image-filter calculation gives $j(G)=G$, and consequently $\overline M=M[G]$. The critical-point calculation also gives agreement below $\kappa$, $V_\kappa=M_\kappa$, in the two ground parts. The remaining task is to prove that $M$ and the restricted map actually belong to the ground model, not merely to the forcing extension. [step 1.1, step 1.2, step 2.1]

4.1 First record the fresh-sequence obstruction specialized to small forcing. If $\operatorname{cf}(\theta)>\mu$, $P$ adds no sequence $s:\theta\to\mathrm{Ord}$ which is new while every proper initial segment is in $V$. Indeed, for each $\alpha<\theta$ the truth lemma gives a condition $p_\alpha\in G$ and a ground sequence $s_\alpha$ such that $p_\alpha\Vdash\dot s\mathbin{\upharpoonright}\alpha=\check s_\alpha$. One condition $p\in G$ occurs for an unbounded set of $\alpha$, because there are at most $\mu$ conditions and $\operatorname{cf}(\theta)>\mu$. Persistence then makes $p$ decide all of $\dot s$ as the union of those compatible ground initial segments, contrary to newness. The same argument works over $M$ for the forcing $j(P)=P$. [F2, step 1.1, step 3.1]

4.2 We next prove the common-cover claim used by the restriction. If $\sigma$ is a set of ordinals of extension-cardinality $\delta$, there is a set $\tau\in M\cap V$ of cardinality $\delta$ with $\sigma\subseteq\tau$. First, a $\delta$-enumeration of $\sigma$ is a $\delta$-sequence of ordinals, so the closure from step 3.1 puts it, and hence $\sigma$, in $M[G]$. A $P$-name for such an enumeration has at most $\delta\mu=\delta$ possible ordinal values, so $\sigma$ has a $V$-cover of size $\delta$; the same name calculation in $M$ gives an $M$-cover. Alternate these two operations for $\delta$ stages, taking increasing covers, and let $\tau$ be their union. The resulting sequence belongs to $M[G]$ by its $\delta$-closure. On the cofinally many stages whose values lie in $V$, a single condition of $G$ decides unboundedly many values, because $|P|<\delta$ and $\delta$ is regular; monotonicity of the sequence makes that condition decide the union, so $\tau\in V$. Repeating this argument with an $M$-name at the cofinally many $M$-stages gives $\tau\in M$. [F2, F3, step 1.1, step 3.1]

5.1 It follows that $M$ and $V$ have the same $\delta$-sequences of ordinals. For a size-$\delta$ set of ordinals $\sigma$ in either class, take the common cover $\tau$ from step 4.2 and enumerate it increasingly in both classes as $\langle\beta_\xi:\xi<\gamma\rangle$, where $\gamma<\delta^+<\kappa$. The index set $A=\{\xi<\gamma:\beta_\xi\in\sigma\}$ lies below $\kappa$. The agreement $V_\kappa=M_\kappa$ from step 3.1 puts $A$, and hence $\sigma$, in both classes. Shorter sequences are padded to length $\delta$. [step 3.1, step 4.2]

6.1 We now show $M\subseteq V$. It suffices, by coding, to prove this for sets of ordinals. Induct on $\theta$ for $A\subseteq\theta$ in $M$, assuming every proper initial segment is in $V$. If $\operatorname{cf}(\theta)\geq\delta$, then a new $A$ would be a fresh $\theta$-sequence, contradicting step 4.1. If $\operatorname{cf}(\theta)<\delta$, write $A=\dot A_G$ and choose a sufficiently large $V_\zeta$ with an elementary $X\prec V_\zeta$ of size $\delta$ containing $P$, every element of $P$, and $\dot A$. The set $X\cap\mathrm{Ord}$ belongs to $M$ by step 5.1. Hence $a=A\cap X$ is in $M$, and step 5.1 puts this size-at-most-$\delta$ set of ordinals in $V$. Some $p\in G$ forces $X\cap\dot A=\check a$. Thus $X$ satisfies that $p$ decides every membership question for $\dot A$ whose index lies in $X$; elementarity makes the same statement true in $V_\zeta$. Therefore $p$ decides all of $\dot A$, so $A\in V$. The usual membership-rank coding then yields $M\subseteq V$. [F2, F3, step 4.1, step 5.1]

7.1 The identical fresh-sequence induction, now between $M$ and $M[G]$, shows $$ M=V\cap M[G]. $$ For a set of ordinals common to $V$ and $M[G]$, use step 4.1 at cofinality at least $\delta$ and step 5.1 at smaller cofinality; an arbitrary set is reduced to its index set in an $M$-enumeration of an ambient $M$-set. This is the exact target-identification needed below. [step 4.1, step 5.1, step 6.1]

7.2 The ultrapower embedding is amenable to $V[G]$. We prove that $j\mathbin{\upharpoonright}V$ is amenable to $V$. It is enough to show $j``\theta\in V$ for every ordinal $\theta$. Induct on $\theta$. At cofinality at least $\delta$, a new image sequence would violate step 4.1. At smaller cofinality choose $X\prec V_\zeta$ as in step 6.1. The set $a=(j``\theta)\cap X$ has size at most $\delta$; because $a$ is a small subset of $j``\theta$, write $a=j``b=j(b)$ for some $b\subseteq\theta$ of size at most $\delta$. Use step 4.2 to cover $b$ by a size-$\delta$ set $c\in M\cap V$ and replace $c$ by $c\cap\theta$. Then $a\subseteq(j``c)\cap X\subseteq(j``\theta)\cap X=a$, while $j``c=j(c)\in M\subseteq V$, so $a\in V$. A condition in $G$ decides this trace, and elementarity of $X$ makes it decide the entire image sequence. Thus $j``\theta\in V$. Replacement converts these image sequences to every set restriction $j\mathbin{\upharpoonright}A\in V$. [step 1.2, F2, F3, step 4.1, step 4.2, step 6.1]

8.1 In the ground model define $U_0=\{A\subseteq\kappa:A\in V\text{ and }\kappa\in j(A)\}$. Step 7.2 makes this a ground set. As in step 1.2, elementarity gives complement decision, finite-intersection closure and upward closure; no singleton belongs to $U_0$ because $j$ fixes all ordinals below $\kappa$. If $\eta<\kappa$ and $A_\xi\in U_0$ for every $\xi<\eta$, then $j(\eta)=\eta$ and $\kappa$ belongs to every $j(A_\xi)$, hence to $j(\bigcap_{\xi<\eta}A_\xi)$. Thus $U_0$ is a nonprincipal $\kappa$-complete ultrafilter on $\kappa$ in $V$. By the local definition in the Statement, $\kappa$ was measurable in $V$, as required. [F1, step 1.2, step 7.2] ∎
