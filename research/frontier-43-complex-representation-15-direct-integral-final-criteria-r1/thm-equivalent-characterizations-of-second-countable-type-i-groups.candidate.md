---
id: "thm-equivalent-characterizations-of-second-countable-type-i-groups"
kind: "theorem"
title: "Equivalent characterizations of second-countable type I groups"
status: "draft"
origin: "pipeline"
pipeline_run: "frontier-43-complex-representation-15"
dependency_level: 7
proof_strategy: direct
deps: ["lem-separable-group-c-star-type-i-and-smooth-dual-criteria", "def-type-i-factor-representation-and-type-i-group", "def-unitary-dual-of-a-locally-compact-group", "def-primitive-ideal-space-of-a-group-c-star-algebra", "def-axiom-of-choice", "def-mackey-borel-structure-and-countable-separation"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)", "url": "https://arxiv.org/pdf/1912.07262", "locator": "Chapter 8, §8.F: Theorem 8.F.3 and its references (Glimm; Dixmier Chapter 9), printed pp. 256-258"}, {"title": "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)", "url": "https://bruceblackadar.com/Mathematics/Cycr.pdf", "locator": "Part IV, §1.5: IV.1.5.7 and IV.1.5.12, printed pp. 359-361 (PDF pp. 367-369)"}]}
verification: {"precheck": "pending"}
---

## Statement

Assume the Axiom of Choice. For a second-countable locally compact group $G$ the following are equivalent: (i) $G$ is type I; (ii) every factor representation of $G$ on a separable Hilbert space is type I (equivalently, is a multiple of an irreducible); (iii) the Mackey Borel structure and the Fell-topology Borel structure on $\widehat G$ coincide and $\widehat G$ is standard Borel; (iv) $\widehat G$ is countably separated ([[def-mackey-borel-structure-and-countable-separation]]); (v) the map $\kappa:\widehat G\to\operatorname{Prim}(C^*(G))$ is a homeomorphism onto its image.

## Facts & Assumptions

[F1] The type-I group convention means exactly that every nonzero separable factor representation is type I; a separable factor is type I precisely when its representation is a multiple of an irreducible ([[def-type-i-factor-representation-and-type-i-group]]).

[F2] For the second-countable group, the local criteria lemma equates the factor-type-I condition, standardness of the Mackey dual together with equality with Fell Borel sets, countable separation, and the primitive-kernel homeomorphism condition ([[lem-separable-group-c-star-type-i-and-smooth-dual-criteria]]). Its sole original-source cited implication is recorded in that supplier; this theorem imports no additional cited fact.

[F3] The dual, Mackey structure, countable separation and primitive space have their stated conventions ([[def-unitary-dual-of-a-locally-compact-group]], [[def-mackey-borel-structure-and-countable-separation]], [[def-primitive-ideal-space-of-a-group-c-star-algebra]]).

[A1] AC is assumed and inherited by all selections in the criteria and definitional suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct, by the exact criteria and definitional interfaces.

**Given:** AC and the second-countable locally compact group $G$ of the Statement.

1.1 By [F1], clause (i) is the definition of clause (ii). The parenthetical equivalence in (ii) is precisely the separable factor-to-multiple equivalence discharged in [F1], so it retains every stated multiplicity, including countably infinite multiplicity. These are nonzero factor representations; the zero carrier introduces no additional obligation. [F1, A1, given]

2.1 By [F2], the condition in clause (ii) is equivalent to standardness of the Mackey dual together with equality of Mackey and Fell-topology Borel sets, which is clause (iii) under [F3]; it is also equivalent to countable separation in clause (iv) and to the homeomorphism condition in clause (v). In particular, a homeomorphism onto its image is injective and gives the kernel criterion of [F2]; conversely that criterion supplies the asserted homeomorphism. The primitive-kernel map has image all primitive ideals because a primitive ideal is the kernel of an irreducible nondegenerate representation, but the weaker literal “onto its image” formulation is already enough. Thus the implications are in both directions, with the Borel equality and topological assertion included. [F1, F2, F3, step 1.1]

3.1 Combining step 1.1 and step 2.1 proves the exact five clauses in the Statement. The canonical dual-indexed irreducible-multiplicity decomposition is a subsequent theorem using the now-proved standard dual; it is not a premise of these equivalences. AC is inherited from [F1]–[F3], and this assembly makes no additional field selections. [F1, F2, F3, A1, step 1.1, step 2.1] ∎

## Proof boundary

The criteria supplier contains exactly the owner-authorized Glimm factor-type-I-to-GCR cited implication. This theorem introduces no additional cited fact and asserts only its five literal clauses. Its factor representations follow the nonzero separable convention of the Definition.
