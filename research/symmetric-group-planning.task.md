# Sol lead: representation theory of symmetric groups

The owner commissioned one Sol agent at high reasoning effort to build a new
prose scaffold for the category **Representation theory of symmetric groups**.
Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `briefs/beta-scaffold.md` first.
The normative scope is this commission, not old subjects-run instructions.

## Deliverables

Own only `research/plan-symmetric-group-representations-track.md` and
`research/symmetric-group-planning/`. The latter contains research reports,
concise source manifests, proposed item inventory if useful, and `pages.json`.
Do not alter the live plan, existing scaffolds or content, runtime state, or Git.
The supervising agent integrates both new tracks after review.

Use relative prefix `SYMR` after checking uniqueness. Supply paired A/B pages,
with fewer than 60 proposed items per A page and B pages as dependency leaves.
There is no artificial page/item target. `pages.json` is an array of page records:
`id`, `title`, `kind`, `category: representation-theory-of-symmetric-groups`,
`companion`, `requires`, and `items: []`. Use exact existing or new page IDs in
`requires`; absolute orders will be assigned during integration. Proposed item
IDs, explicit dependencies, statements, proof routes, and source support belong
in the scaffold or a separate proposed inventory, not live plan item arrays.

## Required Terra research team

Actually spawn seven distinct agents with model `gpt-5.6-terra` and reasoning
effort `high`, using `fork_turns: none` and complete task instructions:

1. Retrieve and inspect a full authoritative textbook on ordinary symmetric-group
   representations and character theory.
2. Retrieve and inspect a different full authoritative textbook on symmetric
   functions, tableaux, and related representation theory.
3. Retrieve and inspect a different full authoritative textbook on modular,
   Hecke, or broader algebraic representation theory relevant to the track.
4. Retrieve relevant arXiv articles and lecture notes on seminormal forms,
   Jucys--Murphy methods, character computations, and branching refinements.
5. Retrieve relevant arXiv articles and lecture notes on modular simple modules,
   blocks, decomposition numbers, and modular branching.
6. Retrieve relevant arXiv articles and lecture notes on Hecke/KLR algebras,
   Fock spaces, and categorification.
7. Retrieve relevant arXiv articles and lecture notes on induction products,
   symmetric functions, Kronecker coefficients, stability, and asymptotic
   representation theory; distinguish proved theory from unresolved questions.

The global concurrency limit is four including root and this lead; run at most
two researchers simultaneously in waves. Do local inventory and scaffold work
while the researchers work. All seven assignments must be launched and completed.
Record the actual roster and model/effort settings in the research evidence.

Every researcher must scout and download complete source text, validate that it
is a full document rather than a preview or abstract, and return bibliographic
metadata, authoritative URL, local path, SHA-256, PDF page count or full HTML
validation, exact sections read, and a mathematical harvest with locators.
Use legitimate author, publisher, university, or arXiv copies. Store full texts
under ignored `scratchpad/source-cache/symmetric-groups/` or a durable external
cache. Retrieve another authoritative book when a desired book has no accessible
full text, after trying legitimate copies of the same text. Do not relabel short
lecture notes as textbooks. Separate retrieval from actual reading claims.

## Coverage and existing ownership

Develop a substantial coherent graduate track with proof plans and worked
examples, guided by the retrieved sources. Audit ordinary character methods,
symmetric functions/Frobenius characteristic, Littlewood--Richardson and skew
methods, Jucys--Murphy/seminormal forms, modular Specht/simple theory, blocks and
branching, Hecke and graded/KLR interfaces, and categorification. Include deeper
directions where source support and prerequisites justify them; explain omissions.
Do not claim a general positive combinatorial Kronecker rule or general solved
modular decomposition problem. State characteristic, parameter, rank, and
base-field restrictions for every result that needs them.

Read the exact existing group-representation prose scaffold, especially RG-8
through RG-11 and RG-13. Young diagrams/permutation modules, characteristic-zero
Specht classification, branching, hook lengths, RSK, and a Schur--Weyl interface
are already planned there. Generic type-A Hecke algebras, their standard basis,
specialization, and Tits deformation are also already owned by RG-13. Inherit
these results explicitly; do not duplicate them under new IDs. The new category
may use them as its prerequisite foundation. Identify any genuine extension of
an existing statement and its exact added hypotheses or conclusion.

Audit all relevant actual library content and prose tracks, particularly group
theory, abstract algebra, combinatorics, category theory, homological algebra,
Lie theory, and the new braid-group scaffold. Published status comes from disk;
nonempty plan inventories alone do not imply publication. Planned suppliers must
be described as planned, with their interface verified against the prose.

The braid-group lead owns braid topology and geometric representations, the
braid-specific categorical actions, Rouquier/Soergel braid connections, and
link-homology applications it actually scaffolds. Reconcile via explicit source
and page interfaces; avoid a dependency cycle. Coordinate proposed overlaps with
root. Add substantial missing infrastructure to this scaffold when appropriate;
never assume a prerequisite merely because a broad category exists.

## Evidence and review

For each proposed item give a stable unique kind-prefixed ID, exact claim,
explicit dependency IDs, proof strategy and intermediate lemmas, statement/proof
provenance, exact source locators, and purpose. Include worked examples and
counterexamples. Record conventions, choice/size restrictions, source-heading
dispositions linked to item IDs, and ownership/amendment decisions. Use at least
two independent treatments for major proof routes where available; report real
gaps. A source citation alone is not evidence of reading or a proof plan.

Keep root informed of researcher waves, retrieved books, and substantive scope
or proof blockers. Finish with a truthful inventory, source and agent counts,
page-supplement validation, open issues, and the exact files to integrate.
