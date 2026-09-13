---
id: thm-krull-schmidt-for-og-lattices
kind: theorem
title: Krull-Schmidt holds for finite-rank OH-lattices
status: published
origin: pipeline
deps: [def-relative-projectivity-and-vertices-for-og-lattices]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Part IV, Propositions 1.2–1.9 and 4.9, pp. 228–230 and 267"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
    - title: "Craven, The Brauer Correspondence, sections 2.1–2.2, pp. 18–22"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Statement

Let $(K,\mathcal O,k)$ be a splitting $p$-modular system and let $H$ be a
finite group. Every finite-rank $\mathcal O H$-lattice is a finite direct sum
of indecomposable $\mathcal O H$-lattices, and the multiset of isomorphism
classes of the summands is unique. Moreover, the endomorphism ring of every
nonzero indecomposable $\mathcal O H$-lattice is local.

## Facts & Assumptions

**Given:** The modular system, finite group, and finite-rank lattices in the
Statement.

[F1] An $\mathcal O H$-lattice is finite free over the complete DVR
$\mathcal O$ ([[def-relative-projectivity-and-vertices-for-og-lattices]]).

## Proof

1.1 Let $M$ be such a lattice and put $E=\operatorname{End}_{\mathcal O H}(M)$. As an $\mathcal O$-submodule of the finite free module $\operatorname{End}_{\mathcal O}(M)$, the module $E$ is finite free and $\mathfrak m$-adically complete. Also $\mathfrak mE\subseteq J(E)$: for $x\in\mathfrak mE$ and $y\in E$, the geometric series $\sum_{n\geq0}(yx)^n$ converges and inverts $1-yx$. [F1, algebra]

2.1 The algebra $\bar E=E/\mathfrak mE$ is finite-dimensional over $k$, so its Jacobson radical $J(\bar E)$ is nilpotent and $\bar E/J(\bar E)$ is semisimple Artinian. Because $\mathfrak mE\subseteq J(E)$ by step 1.1, the standard quotient identity gives $$J(E/\mathfrak mE)=J(E)/\mathfrak mE.$$ For completeness, if $x+\mathfrak mE$ lies in the radical of the quotient, then for every $y\in E$ the element $1-yx$ is a unit modulo $\mathfrak mE$; lifting a two-sided inverse leaves errors in $\mathfrak mE\subseteq J(E)$, and multiplying by the inverses of $1$ minus those errors gives a two-sided inverse in $E$. Thus $x\in J(E)$ by the Jacobson-radical test. The reverse inclusion follows by passing units to the quotient. Consequently $E/J(E)\cong\bar E/J(\bar E)$ is semisimple Artinian. [step 1.1, algebra]

3.1 Idempotents lift from $E/J(E)$ to $E$. First lift through the nilpotent ideal $J(\bar E)$: successively through its powers, the polynomial Newton correction to $e^2-e$ turns an error in $J(\bar E)^n$ into one in $J(\bar E)^{2n}$, so the finite nilpotence filtration terminates. Then lift the resulting idempotent of $E/\mathfrak mE$ by the same corrections in $E$; completeness makes the corrections converge. Therefore $E$ is semiperfect. [step 1.1, step 2.1, algebra]

4.1 A nontrivial idempotent of $E$ is exactly a nontrivial direct-sum decomposition of $M$. Repeatedly splitting such an idempotent terminates, because the positive $\mathcal O$-ranks of both summands are smaller; direct summands remain finite free over the DVR. This proves existence of a finite indecomposable decomposition. If $M$ is indecomposable, $E$ has no nontrivial idempotent. By step 3.1, every idempotent of the semisimple Artinian ring $E/J(E)$ lifts, so that quotient also has no nontrivial idempotent. It must therefore be a division ring. Hence the nonunits of $E$ are exactly $J(E)$, and $E$ is local. [step 2.1, step 3.1, algebra]

5.1 Suppose $M=\bigoplus_{i=1}^rM_i=\bigoplus_{j=1}^sN_j$ are two indecomposable decompositions. Restrict the identity of $M$ to $M_1$ through the second decomposition. It becomes a finite sum of composites $M_1\to N_j\to M_1$. In the local ring $\operatorname{End}_{\mathcal O H}(M_1)$, a sum of nonunits cannot be $1$; therefore one composite is a unit. Write that composite as $ab$, where $b:M_1\to N_j$ is the second-decomposition projection restricted to $M_1$ and $a:N_j\to M_1$ is the first-decomposition projection restricted to $N_j$. Replacing $b$ by $b(ab)^{-1}$ gives $ab=1_{M_1}$. Hence $N_j=b(M_1)\oplus\ker a$; indecomposability and $b(M_1)\ne0$ force $\ker a=0$, so $a$ is an isomorphism. Relative to $M=M_1\oplus M'$ with $M'=\bigoplus_{i>1}M_i$, the summand $N_j$ is therefore the graph of a map $M_1\to M'$. Subtracting that graph map is an automorphism of $M$ which fixes $M'$ and carries $N_j$ to $M_1$. Thus $M=N_j\oplus M'$, and quotienting by $N_j$ identifies $M'$ with the sum of the remaining $N$-summands. Induction on the rank matches all summands and their multiplicities. The zero lattice has the empty decomposition, while the local ring assertion was stated only for nonzero indecomposables. Every selection is from a finite decomposition, so no choice principle is used. [step 4.1, algebra] ∎
