---
id: prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers
kind: proposition
title: Positive systems, bases, and chambers
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, def-positive-system-and-base-of-simple-roots, def-open-and-closed-weyl-chambers, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §6, chambers and positive systems, printed pp. 163-168"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 22, Lemma 22.3 and Corollary 22.7, printed pp. 116-117"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system. The
assignment to an open Weyl chamber $C$ of the set of roots positive on $C$
and the assignment to a positive system $\Phi^{+}$ of the chamber
$\{x:(x,\alpha)>0\text{ for all }\alpha\in\Phi^{+}\}$ are mutually inverse
bijections between the open chambers and the positive systems of $\Phi$.
Consequently positive systems, bases, and chambers are in bijection, and the
Weyl group $W(\Phi)$ acts simply transitively on each of these three sets.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with Weyl group $W$, its open chambers, and its positive systems.

[L1] A chamber is a connected component of the complement of the finitely many root hyperplanes $L_\alpha$; it is an open convex cone, and for a root $\alpha$ the sign of $(x,\alpha)$ is constant on $C$ ([[def-open-and-closed-weyl-chambers]]).

[L2] A positive system is a set $\Phi^{+}=\{\alpha\in\Phi:(v,\alpha)>0\}$ defined by a regular vector $v$, its simple roots are the indecomposable elements, and they form a basis whose nonnegative integral combinations give exactly the positive roots ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L3] $W$ acts simply transitively on the open chambers ([[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]).

## Proof

**Proof technique:** direct.

1.1 Each chamber $C$ determines a positive system: by [L1] the sign of $(x,\alpha)$ is constant on $C$, so the set $\Phi^{+}(C)=\{\alpha:(x,\alpha)>0\text{ for }x\in C\}$ is well defined independently of the chosen $x\in C$; it contains exactly one of $\pm\alpha$, hence arises from any $x\in C$ viewed as a regular vector via the inner product, and is a positive system in the sense of [L2]. [L1, L2, algebra]

1.2 Conversely each positive system $\Phi^{+}$ determines a chamber $C(\Phi^{+})=\{x:(x,\alpha)>0\text{ for all }\alpha\in\Phi^{+}\}$: it is nonempty because it contains the regular vector defining $\Phi^{+}$; it is an open convex cone defined by finitely many strict linear inequalities, hence is contained in a single chamber; and it equals that chamber because no root changes sign strictly inside it and every boundary point lies in some root hyperplane. [L1, L2, algebra]

1.3 Positive systems correspond bijectively to their simple-root bases: a base $\Delta$ determines the positive system $\{\beta\in\Phi:\beta=\sum_{\alpha\in\Delta}n_\alpha\alpha\text{ with all }n_\alpha\in\mathbb Z_{\ge0}\}$, and the positive system determines the base as its indecomposable elements, by [L2]; these are inverse constructions. [L2, algebra]

2.1 The two assignments are inverse: $\Phi^{+}(C(\Phi^{+}))=\Phi^{+}$ because the roots positive on $C(\Phi^{+})$ are exactly those in $\Phi^{+}$, one sign being constant on the cone; and $C(\Phi^{+}(C))=C$ because both are open convex sets defined by the same sign conditions and the sign pattern determines the chamber. [step 1.1, step 1.2, algebra]

3.1 The Weyl group acts on chambers, hence by steps 1.1 and 2.1 on positive systems and bases, and the action is simply transitive by [L3]. Explicitly, $w\cdot\Phi^{+}(C)=\Phi^{+}(wC)$ and a chamber has a unique Weyl image, so each positive system and base has exactly one Weyl translate, giving simple transitivity on all three sets. [L3, step 1.1, step 1.3, algebra] ∎
