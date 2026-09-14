---
id: thm-a-supercompact-cardinal-can-be-forced-to-give-pfa
kind: theorem
title: "A supercompact cardinal can be forced to give PFA"
status: draft
origin: pipeline
deps: [def-proper-forcing-axiom, def-laver-guided-proper-bookkeeping-iteration, lem-laver-guided-iteration-size-collapse-and-factorization, thm-lc-laver-function-existence, thm-generic-extensions-satisfy-zf-and-zfc, thm-forcing-theorem, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Theorem 24.11, pp.99-101"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Statement

If $\kappa$ is supercompact, the Laver-guided countable-support iteration
$P_\kappa$ forces PFA and $\kappa=\omega_2$, while preserving $\omega_1$ and
ZFC.

## Facts & Assumptions

**Given:** A ZFC ground universe $V$ with a supercompact cardinal $\kappa$. Generic filters used in the semantic proof are supplied in common outer universes; none is asserted to exist inside its ground model.

[F1] PFA asks for a filter meeting every family of at most $\omega_1$ dense subsets of each nonempty proper partial order. [[def-proper-forcing-axiom]]

[F2] A supercompact cardinal has a Laver anticipation function. [[thm-lc-laver-function-existence]]

[F3] The Laver-guided iteration is proper, preserves $\omega_1$, forces $\kappa=\omega_2$, and an embedding anticipating a forced-proper name factors its image as $P_\kappa*\dot Q*\dot R$. [[lem-laver-guided-iteration-size-collapse-and-factorization]]

[F4] Set-forcing extensions of ZFC models satisfy ZFC. [[thm-generic-extensions-satisfy-zf-and-zfc]]

[F5] Forcing is definable formula by formula and satisfies the truth lemma and, when the stated outer generics are available, its semantic characterization. [[thm-forcing-theorem]]

[F6] The bookkeeping iteration uses the anticipated name exactly when the preceding stage forces that it is a nonempty proper order with a greatest condition. [[def-laver-guided-proper-bookkeeping-iteration]]

[A1] AC supplies the ground well-orders and the set-sized selections of names, bounds, and embeddings used below. [[def-axiom-of-choice]]

## Proof

1.1 By F2 fix a Laver function and form $P_\kappa$ as in F6. By F3 this forcing is proper, preserves $\omega_1$, and forces $\kappa=\omega_2$. Let $G\subseteq P_\kappa$ be arbitrary $V$-generic. F4 gives $V[G]\models\mathrm{ZFC}$. It remains to prove PFA in this arbitrary extension. [F2, F3, F4, F6, Given]

2.1 Work in $V[G]$. Fix a nonempty proper partial order $Q$ and a family $\langle D_\xi:\xi<\lambda\rangle$ of dense subsets, where $\lambda\leq\omega_1$. If $\lambda=0$, any $q\in Q$ generates a filter and there is nothing to meet. Suppose $0<\lambda\leq\omega_1$ and repeat $D_0$ to regard the family as an $\omega_1$-sequence. Choose ground names $\dot Q,\dot{\vec D}$ for these objects. By F5 there is $p\in G$ forcing that $\dot Q$ is proper and that $\dot{\vec D}$ is an $\omega_1$-sequence of dense subsets of it. Restrict every coefficient of $\dot Q$ below $p$ and adjoin a new greatest condition, obtaining a name $\dot Q^*$. In a generic containing $p$ its value is $Q$ with that new top; in a generic on the incompatible side its value is the one-condition order. Adding a top preserves properness: an old condition uses a $Q$-master, while below the new top a countable model containing the nonempty $Q$ contains an old condition and a $Q$-master below it. The set of conditions below $p$ or incompatible with $p$ is dense, so F5 shows that $1_{P_\kappa}$ forces $\dot Q^*$ to be nonempty, proper, and to have a greatest condition. In the actual extension every $D_\xi\subseteq Q$ remains dense in $Q^*$. [F1, F5, A1, step 1.1]

3.1 Choose a cardinal large enough for the names in step 2.1 and all restrictions of the desired embedding to them. Laver anticipation and supercompactness give a correspondingly closed $j:V\to M$ with critical point $\kappa$ and $j(\ell)(\kappa)=\dot Q^*$. By step 2.1 and F6 the image iteration uses $\dot Q^*$ at stage $\kappa$, and F3 gives in $M$ a tail name $\dot R$ and a canonical dense factorization $$j(P_\kappa)\simeq P_\kappa*\dot Q^* *\dot R.$$ [F2, F3, F6, A1, step 2.1]

4.1 By the outer-universe convention in Given, take $g\subseteq Q^*$ generic over $V[G]$, followed by an $M[G*g]$-generic $H\subseteq R$, all in a common outer universe. Under the factorization let $K=G*g*H$. Every condition of $G$ has countable, hence bounded, support in $\kappa$; the canonical first factor therefore sends it into $K$, so $j``G\subseteq K$. Define $$j_G(\operatorname{val}_G(\tau))=\operatorname{val}_K(j(\tau)).$$ If two $P_\kappa$-names have the same $G$-value, F5 gives a condition of $G$ forcing their equality; its image belongs to $K$, so F5 in $M$ makes the displayed definition independent of the name. The same argument, applied to a formula or its negation, proves formula-by-formula that $j_G:V[G]\to M[K]$ is elementary and extends $j$. [F3, F5, Given, step 3.1]

5.1 Enumerate in $V$ the transitive closure of the name $\dot Q^*$ below the closure bound chosen in step 3.1. Closure puts the pointwise image of that enumeration in $M$, and evaluating it with $G$ and $K$ constructs the set restriction $j_G\restriction Q^*$ in $M[K]$. There form the upward-closed filter $F$ generated by $j_G``g$. It is directed because $g$ is directed and $j_G$ preserves the order. Since $\operatorname{crit}(j_G)=\kappa>\omega_1$, $$j_G(\langle D_\xi:\xi<\omega_1\rangle)=\langle j_G(D_\xi):\xi<\omega_1\rangle.$$ For every $\xi<\omega_1$, genericity gives $q_\xi\in g\cap D_\xi$, and $j_G(q_\xi)\in F\cap j_G(D_\xi)$. Thus $M[K]$ satisfies that a filter on $j_G(Q^*)$ meets every member of the image sequence. Elementarity of $j_G$ reflects the existential assertion to a filter $f$ on $Q^*$ in $V[G]$ meeting every $D_\xi$. Because the sequence is nonempty and every $D_\xi$ lies in $Q$, $f\cap Q$ is nonempty; it is upward closed in $Q$, and any common extension in $f$ of two of its members lies in $Q$, not at the newly adjoined greatest condition. Hence $f\cap Q$ is the required filter on $Q$. [F1, F5, A1, step 2.1, step 3.1, step 4.1]

6.1 The choice of $Q$ and its dense family in $V[G]$ was arbitrary, including the empty-family case, so F1 and step 5.1 give $V[G]\models\mathrm{PFA}$. Since $G$ was an arbitrary generic, F5 yields $P_\kappa\Vdash\mathrm{PFA}$. Step 1.1 and F3 give preservation of $\omega_1$ and $P_\kappa\Vdash\kappa=\omega_2$, while F4 gives preservation of ZFC. All uses of Choice are those declared in A1; the outer generics facilitate the semantic argument and are not claimed to be elements of $V[G]$. [F1, F3, F4, F5, A1, step 1.1, step 5.1] ∎
