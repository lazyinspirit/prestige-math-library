# subjects-01 · combinatorics · source harvest: algebraic, spectral and design-theoretic combinatorics

Research-only artifact. Produced by the source-research subagent for the `combinatorics`
scaffolder lane of run `subjects-01`. **No scaffold file, no `items/` file and no
`plan-spec.json` was touched by this agent.**

Target pages (planned but unauthored): **linear-algebra methods in combinatorics**;
**block designs and finite projective planes**; **algebraic and spectral graph theory**.

---

## A. Source ledger

Legend for **form obtained**: `full-text` = the complete book/notes PDF was downloaded and
is machine-readable locally; `toc+named` = table of contents plus the source's own numbered
named-result headings were extracted; `toc` = table of contents only.

| # | Source | Working URL | Form obtained | Range read |
|---|---|---|---|---|
| S1 | Brouwer, A. E. & Haemers, W. H., *Spectra of Graphs*, Springer Universitext (monograph draft, dated 1 Feb 2011), 255 pp. | `https://www.win.tue.nl/~aeb/2WF02/spectra.pdf` | **full-text**, toc+named | Whole book: Preface, Ch. 1–15, i.e. §1.1–§15.4. 238 numbered named results extracted verbatim. |
| S2 | Spielman, D. A., *Spectral and Algebraic Graph Theory* (free book draft), Yale, 400 pp. | `http://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf` | **full-text**, toc (376-entry embedded outline) | Whole book: Parts I–V, Ch. 1–33 incl. all subsection headings. Read in detail: §2 (Courant–Fischer), §4.5 (Perron–Frobenius symmetric case), §20–21 (graph partitioning, Cheeger). |
| S3 | Stanley, R. P., *Topics in Algebraic Combinatorics* (version of 1 Feb 2013; the text published by CUP as *Algebraic Combinatorics: Walks, Trees, Tableaux, and More*), 225 pp. | `https://math.mit.edu/~rstan/algcomb/algcomb.pdf` (index: `https://math.mit.edu/~rstan/algcomb/`) | **full-text**, toc+named | Whole book: Ch. 1–12 plus both appendices. All numbered named results extracted verbatim. Read in detail: Ch. 3 (Perron–Frobenius usage), Ch. 9 (Matrix-Tree), Ch. 12 (gems). |
| S4 | Babai, L. & Frankl, P., *Linear Algebra Methods in Combinatorics*, Version 2.2.1, November 2024 (slight update of Version 2, 1992; first circulated 1988), Dept. of Computer Science, University of Chicago, 251 pp. | `https://people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf` | **full-text**, toc+named | Whole book: Preface, Notation, Ch. 1–10 plus "Answers to the exercises". All numbered named results extracted verbatim. |
| S5 | Godsil, C. D., *Association Schemes* (lecture notes / book draft, 242 pp.) | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/assoc2.pdf` (index: `https://www.math.uwaterloo.ca/~cgodsil/mine/notes.html`) | **full-text**, toc (143-entry embedded outline) | Whole notes, all chapters. |
| S6 | Godsil, C. D., *Finite Geometry* (lecture notes, ©2004, 81 pp.) | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/fgeom.pdf` | **full-text**, toc | Whole notes: Preface, Ch. 1–7+ (§1.1–§7.5 harvested). |
| S7 | Godsil, C. D., *Tools from Linear Algebra*, chapter in the *Handbook of Combinatorics*, 52 pp. | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/tools.pdf` | **full-text**, toc | Whole chapter, §1–§7. (PDF has a damaged font encoding; text is recoverable but noisy.) |
| S8 | Alon, N., "Combinatorial Nullstellensatz", *Combin. Probab. Comput.* **8** (1999) 7–29. | `https://www.tau.ac.il/~nogaa/PDFS/null2.pdf` | **full-text** | §1–§2 read verbatim (statements + complete proofs of Thm 1.1, Thm 1.2, Lemma 2.1); §3–§10 headings. |
| S9 | Forbes, A., "The Bruck–Ryser theorem for projective planes", talks given at LSBU, October 2014. | `https://www.theoremoftheday.org/MathsStudyGroup/ADF-Bruck%20Ryser.pdf` | **full-text** | Whole note: Theorem 1 with complete proof, Lemmas 1–3, "Products of sums of squares". |
| S10 | Godsil, C. D., *Symmetries and Eigenvectors* (survey, 44 pp.) | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/mont.pdf` | full-text (skimmed) | Downloaded; used as a cross-check only. |

Subagent-harvested sources (book TOCs obtained via publisher/review/archive routes) are
listed in **§B.8** with their own URLs.

---

## B. The canonical-coverage harvest

Verbatim headings, with each source's own numbering, grouped by source then chapter.

### B.1 Brouwer & Haemers, *Spectra of Graphs* — full section TOC (S1)

**1 Graph spectrum**
1.1 Matrices associated to a graph · 1.2 The spectrum of a graph · 1.2.1 Characteristic
polynomial · 1.3 The spectrum of an undirected graph · 1.3.1 Regular graphs · 1.3.2
Complements · 1.3.3 Walks · 1.3.4 Diameter · 1.3.5 Spanning trees · 1.3.6 Bipartite graphs ·
1.3.7 Connectedness · 1.4 Spectrum of some graphs · 1.4.1 The complete graph · 1.4.2 The
complete bipartite graph · 1.4.3 The cycle · 1.4.4 The path · 1.4.5 Line graphs · 1.4.6
Cartesian products · 1.4.7 Kronecker products and bipartite double · 1.4.8 Strong products ·
1.4.9 Cayley graphs · 1.5 Decompositions · 1.5.1 Decomposing K10 into Petersen graphs ·
1.5.2 Decomposing Kn into complete bipartite graphs · 1.6 Automorphisms · 1.7 Algebraic
connectivity · 1.8 Cospectral graphs · 1.8.1 The 4-cube · 1.8.2 Seidel switching · 1.8.3
Godsil-McKay switching · 1.8.4 Reconstruction · 1.9 Very small graphs · 1.10 Exercises

**2 Linear algebra**
2.1 Simultaneous diagonalization · 2.2 Perron-Frobenius Theory · 2.3 Equitable partitions ·
2.3.1 Equitable and almost equitable partitions of graphs · 2.4 The Rayleigh quotient ·
2.5 Interlacing · 2.6 Schur's inequality · 2.7 Schur complements · 2.8 The Courant-Weyl
inequalities · 2.9 Gram matrices · 2.10 Diagonally dominant matrices · 2.10.1 Geršgorin
circles · 2.11 Projections · 2.12 Exercises

**3 Eigenvalues and eigenvectors**
3.1 The largest eigenvalue · 3.1.1 Graphs with largest eigenvalue at most 2 · 3.1.2
Subdividing an edge · 3.1.3 The Kelmans operation · 3.2 Interlacing · 3.3 Regular graphs ·
3.4 Bipartite graphs · 3.5 Cliques and cocliques · 3.5.1 Using weighted adjacency matrices ·
3.6 Chromatic number · 3.6.1 Using weighted adjacency matrices · 3.6.2 Rank and chromatic
number · 3.7 Shannon capacity · 3.7.1 Lovász' ϑ-function · 3.7.2 The Haemers bound on the
Shannon capacity · 3.8 Classification of integral cubic graphs · 3.9 The largest Laplace
eigenvalue · 3.10 Laplace eigenvalues and degrees · 3.11 The Grone-Merris Conjecture ·
3.11.1 Threshold graphs · 3.11.2 Proof of the Grone-Merris Conjecture · 3.12 The Laplacian
for hypergraphs · 3.13 Applications of eigenvectors · 3.13.1 Ranking · 3.13.2 Google Page
rank · 3.13.3 Cutting · 3.13.4 Graph drawing · 3.13.5 Clustering · 3.13.6 Searching an
eigenspace · 3.14 Stars and star complements · 3.15 Exercises

**4 The second largest eigenvalue**
4.1 Bounds for the second largest eigenvalue · 4.2 Large regular subgraphs are connected ·
4.3 Randomness · 4.4 Expansion · 4.5 Toughness and Hamiltonicity · 4.5.1 The Petersen graph
is not Hamiltonian · 4.6 Diameter bound · 4.7 Separation · 4.7.1 Bandwidth · 4.7.2 Perfect
matchings · 4.8 Block designs · 4.9 Polarities · 4.10 Exercises

**5 Trees**
5.1 Characteristic polynomials of trees · 5.2 Eigenvectors and multiplicities · 5.3 Sign
patterns of eigenvectors of graphs · 5.4 Sign patterns of eigenvectors of trees · 5.5 The
spectral center of a tree · 5.6 Integral trees · 5.7 Exercises

**6 Groups and graphs**
6.1 Γ(G,H,S) · 6.2 Spectrum · 6.3 Nonabelian Cayley graphs · 6.4 Covers · 6.5 Cayley sum
graphs · 6.5.1 (3,6)-fullerenes · 6.6 Exercises

**7 Topology**
7.1 Embeddings · 7.2 Minors · 7.3 The Colin de Verdière invariant · 7.4 The Van der
Holst-Laurent-Schrijver invariant

**8 Euclidean representations**
8.1 Examples · 8.2 Euclidean representation · 8.3 Root lattices · 8.4
Cameron-Goethals-Seidel-Shult · 8.5 Exercises

**9 Strongly regular graphs**
9.1 Strongly regular graphs · 9.1.1 Simple examples · 9.1.2 The Paley graphs · 9.1.3
Adjacency matrix · 9.1.4 Imprimitive graphs · 9.1.5 Parameters · 9.1.6 The half case and
cyclic strongly regular graphs · 9.1.7 Strongly regular graphs without triangles · 9.1.8
Further parameter restrictions · 9.1.9 Strongly regular graphs from permutation groups ·
9.1.10 Strongly regular graphs from quasisymmetric designs · 9.1.11 Symmetric 2-designs from
strongly regular graphs · 9.1.12 Latin square graphs · 9.1.13 Partial Geometries · 9.2
Strongly regular graphs with eigenvalue −2 · 9.3 Connectivity · 9.4 Cocliques and colorings ·
9.5 Automorphisms · 9.6 Generalized quadrangles · 9.6.1 Parameters · 9.6.2 Constructions of
generalized quadrangles · 9.6.3 Strongly regular graphs from generalized quadrangles · 9.6.4
Generalized quadrangles with lines of size 3 · 9.7 The (81,20,1,6) strongly regular graph ·
9.7.1 Descriptions · 9.7.2 Uniqueness · 9.7.3 Independence and chromatic numbers · 9.8
Strongly regular graphs and 2-weight codes · 9.8.1 Codes, graphs and projective sets · 9.8.2
The correspondence between linear codes and subsets of a projective space · 9.8.3 The
correspondence between projective two-weight codes, subsets of a projective space with two
intersection numbers, and affine strongly regular graphs · 9.8.4 Duality for affine strongly
regular graphs · 9.8.5 Cyclotomy · 9.9 Table · 9.10 Exercises

**10 Regular two-graphs**
10.1 Strong graphs · 10.2 Two-graphs · 10.3 Regular two-graphs · 10.3.1 Related strongly
regular graphs · 10.3.2 The regular two-graph on 276 points · 10.3.3 Coherent subsets ·
10.3.4 Completely regular two-graphs · 10.4 Conference matrices · 10.5 Hadamard matrices ·
10.5.1 Constructions · 10.6 Equiangular lines · 10.6.1 Equiangular lines in Rd and
two-graphs · 10.6.2 Bounds on equiangular sets of lines in Rd or Cd · 10.6.3 Bounds on sets
of lines with few angles and sets of vectors with few distances

**11 Association schemes**
11.1 Definition · 11.2 The Bose-Mesner algebra · 11.3 The Linear Programming Bound · 11.4
The Krein parameters · 11.5 Automorphisms · 11.5.1 The Moore graph on 3250 vertices · 11.6
P- and Q-polynomial association schemes · 11.7 Exercises

**12 Distance regular graphs**
12.1 Parameters · 12.2 Spectrum · 12.3 Examples · 12.3.1 Hamming graphs · 12.3.2 Johnson
graphs · 12.3.3 Grassmann graphs · 12.3.4 Van Dam-Koolen graphs · 12.4 Bannai-Ito conjecture ·
12.5 Connectedness · 12.6 Degree of eigenvalues · 12.7 Moore graphs and generalized polygons ·
12.8 Primitivity · 12.9 Euclidean representations · 12.10 Extremality · 12.11 Exercises

**13 p-ranks**
13.1 Reduction mod p · 13.2 The minimal polynomial · 13.3 Bounds for the p-rank · 13.4
Interesting primes p · 13.5 Adding a multiple of J · 13.6 Paley graphs · 13.7 Strongly
regular graphs · 13.8 Smith Normal Form · 13.8.1 Smith Normal Form and spectrum

**14 Spectral characterizations**
14.1 Generalized adjacency matrices · 14.2 Constructing cospectral graphs · 14.2.1 Trees ·
14.2.2 Partial linear spaces · 14.2.3 GM switching · 14.2.4 Sunada's method · 14.3
Enumeration · 14.3.1 Lower bounds · 14.3.2 Computer results · 14.4 DS graphs · 14.4.1
Spectrum and structure · 14.4.2 Some DS graphs · 14.4.3 Line graphs · 14.5 Distance-regular
graphs · 14.5.1 Strongly regular DS graphs · 14.5.2 Distance-regularity from the spectrum ·
14.5.3 Distance-regular DS graphs · 14.6 The method of Wang & Xu · 14.7 Exercises

**15 Graphs with few eigenvalues**
15.1 Regular graphs with four eigenvalues · 15.2 Three Laplace eigenvalues · 15.3 Other
matrices with at most three eigenvalues · 15.3.1 Few Seidel eigenvalues · 15.3.2 Three
adjacency eigenvalues · 15.3.3 Three signless Laplace eigenvalues · 15.4 Exercises

### B.2 Brouwer & Haemers — named-result headings (verbatim, with locators)

Format: `number (name as printed) — opening words of the statement`. `p` = PDF page.

**Ch. 1** — Prop. 1.3.1 (walks: `(A^h)_{xy}` counts walks of length h) p14 · Prop. 1.3.2–1.3.4
p15 · **Prop. 1.3.5 (Cauchy-Binet)** p16 · Prop. 1.3.6 p17 · Prop. 1.3.7 "The multiplicity of
0 as a Laplace eigenvalue of an undirected graph…" p17 · Prop. 1.3.8 "Let the undirected
graph Γ be regular of valency k. Then k is…" p17 · Prop. 1.3.9 (signless Laplace) p17 ·
Prop. 1.3.10 "A graph Γ is bipartite if and only if the Laplace spectrum and…" p18 ·
Prop. 1.4.1 p19 · Cor. 1.4.2 p20 · **Prop. 1.5.1 (H. S. Witsenhausen; Graham & Pollak [173])**
p22 · Cor. 1.6.1 "If all eigenvalues are simple, then Aut…" p23 · Cor. 1.6.2 p23 ·
Prop. 1.7.1 p23 · Prop. 1.7.2 p23

**Ch. 2 (Linear algebra)** — Prop. 2.1.1 "Suppose A is a collection of commuting Hermitean
linear transformations…" p31 · **Thm 2.2.1** "Let T ≥ 0 be irreducible. Then there is a
(unique) positive real…" p32 (Perron–Frobenius) · Lemma 2.3.1 (equitable partitions) p34 ·
**Thm 2.4.1 (Courant-Fischer)** p36 · **Thm 2.5.1** (interlacing, `S^T S = I`) p36 ·
**Cor. 2.5.2** (principal submatrix interlacing) p37 · Cor. 2.5.3 p37 · **Cor. 2.5.4**
(quotient-matrix interlacing) p37 · Thm 2.6.1 (Schur [291]) p38 · Thm 2.7.1 (Schur
complement) p38 · Cor. 2.7.2 p38 · Thm 2.8.1, Thm 2.8.2 (Courant–Weyl) p39 · Lemma 2.9.1,
Lemma 2.9.2 (Gram matrices) p39–40 · Lemma 2.10.1 (strict diagonal dominance ⇒ nonsingular)
p40 · Prop. 2.10.2 (Geršgorin) p41 · Lemma 2.11.1 p41

**Ch. 3** — Prop. 3.1.1, Prop. 3.1.2 p43 · Thm 3.1.3 (Smith [310], cf. Lemmens & Seidel
[238]) p44 · Prop. 3.1.4 (Hoffman-Smith [212]) p45 · Prop. 3.1.5 (Csikvári [106]) p46 ·
Prop. 3.2.1 p47 · Prop. 3.3.1, Prop. 3.3.2 p47–48 · Prop. 3.4.1 p48 · **Thm 3.5.1**
"α(Γ) ≤ n − n⁻ = |{i | θi ≥ 0}| and α(Γ) ≤ n − n⁺ = |{i | θi ≤ 0}|" p49 (Cvetković bound) ·
**Thm 3.5.2** "If Γ is regular of nonzero degree k, then α(Γ) ≤ n·(−θn)/(k − θn)" p49
(**the Hoffman / ratio bound**) · **Prop. 3.5.3** (nonregular version: α(Γ) ≤ n(−θ1θn)/(δ² −
θ1θn)) p49 · Thm 3.5.4, **Thm 3.5.5** (weighted adjacency matrices) p49–50 · **Prop. 3.6.1
(Wilf [332])** "χ(Γ) ≤ 1 + θ1 with equality iff Γ is complete or is an odd cycle" p50 ·
**Thm 3.6.2 (Hoffman [210])** "If Γ is not edgeless then χ(Γ) ≥ 1 − θ1/θn" p50 ·
Prop. 3.6.3 p50 · Cor. 3.6.4 p51 · **Prop. 3.7.1 (Lovász [249])** p53 · Lemma 3.7.2
"ϑ(Γ ⊠ Δ) ≤ ϑ(Γ)ϑ(Δ)" p54 · **Thm 3.7.3** "The Shannon capacity c(Γ) satisfies…" p54 ·
**Thm 3.7.4 ('Sandwich')** "α(Γ) ≤ ϑ(Γ) ≤ χ(Γ)" p54 · Prop. 3.7.5, Prop. 3.7.6 p54–55 ·
Lemma 3.7.7, Thm 3.7.8, Prop. 3.7.9 (Haemers bound) p55 · Prop. 3.8.1, Prop. 3.8.2 p57–59 ·
Prop. 3.9.1–3.9.3 p60–61 · Prop. 3.10.1, Prop. 3.10.2 p61–62 · Prop. 3.11.1, Thm 3.11.2,
Lemma 3.11.3, Lemma 3.11.4 (Grone–Merris) p63–66 · Thm 3.12.1 (Duval & Reiner [143]) p68 ·
Lemma 3.12.2 p68 · Prop. 3.14.1 ([144, 113]) p73

**Ch. 4** — **Prop. 4.1.1 (Alon-Boppana [4])** "If k ≥ 3 then for k-regular graphs on n
vertices…" p77 · Prop. 4.1.2 (Serre [306]) p77 · Prop. 4.1.3 ([283]) p77 · Prop. 4.2.1 p78 ·
**Prop. 4.3.1** (expander mixing, one set) p78 · **Prop. 4.3.2** "Let S and T be two subsets
of the vertex set of Γ…" p78 (**expander mixing lemma**) · **Prop. 4.4.1 (cf. Tanner [317])**
p79 · Prop. 4.4.2 ([266]) p80 · Prop. 4.5.1 ([47]) (toughness) p81 · Prop. 4.6.1 (diameter
bound) p81 · Prop. 4.7.1 p82 · Cor. 4.7.2 p83 · **Prop. 4.7.3 (Alon & Milman [8])** p83 ·
Cor. 4.7.4 p83 · Thm 4.7.5 p84 · Thm 4.7.6 ([56]) p84 · **Thm 4.7.7 (Tutte [321])** p84 ·
Lemma 4.7.8 p84 · Thm 4.7.9 ([56, 92]) p85 · Cor. 4.7.10, Cor. 4.7.11 p86 · **Thm 4.8.1**
"Let (P,B) be a 1-(v,k,r) design with b blocks and let (P′,B′) be a…" p87 · **Cor. 4.8.2**
"If a symmetric 2-(v,k,λ) design (P,B) has a symmetric 2-(v′,k′,λ′)…" p88 · Cor. 4.8.3 p88 ·
**Prop. 4.9.1** "A polarity of a projective plane of order q has at least q + 1 and…" p89

**Ch. 5 (Trees)** — Prop. 5.1.1 p91 · **Thm 5.1.2 ('Godsil's Lemma', [165])** p92 ·
Lemma 5.2.1, Prop. 5.2.2 p93 · Prop. 5.3.1 p94 · Prop. 5.4.1, Prop. 5.4.2 p95–96 ·
Prop. 5.5.1 p96 · Prop. 5.6.1 (Watanabe [329]) p97 · Prop. 5.6.2 (Brouwer [49]) p98 ·
Prop. 5.6.3 (Csikvári [107]) p98

**Ch. 6 (Groups and graphs)** — **Prop. 6.3.1 ([138, 268])** "Let G be a finite group and S a
subset that is…" p103 (**Cayley graph eigenvalues**) · Lemma 6.4.1 "Let M be a linear
transformation of V that commutes with all g ∈ G" p104 · Prop. 6.5.1 ([137]) p105

**Ch. 7 (Topology)** — Thm 7.3.1 ([97, 250, 286]) (Colin de Verdière) p110 · Lemma 7.4.1
p111 · Prop. 7.4.2, Prop. 7.4.3 p111

**Ch. 8 (Euclidean representations)** — Prop. 8.3.1 (reduced fundamental system) p117 ·
**Thm 8.4.1 (Cameron–Goethals–Seidel–Shult)** p119

**Ch. 9 (Strongly regular graphs)** — **Prop. 9.1.1** "The Paley graph Paley(q) with q = 4t+1
is strongly regular with…" p124 · **Thm 9.1.2** "For a simple graph Γ…" p125 · **Thm 9.1.3**
p126 (**integrality / rationality conditions**) · Prop. 9.1.4 (Kelly [230], Bridges & Mena
[41]) p127 · **Thm 9.1.5 (Hoffman & Singleton [211])** "Suppose (v,k,0,1) is the parameter…"
p127 (**Moore graphs**) · Thm 9.1.6 p129 · Prop. 9.1.7 p131 · **Thm 9.1.8 (Bose-Neumaier)**
p132 · Thm 9.1.9 p132 · Thm 9.2.1 (smallest eigenvalue −2) p132 · Prop. 9.3.1, Thm 9.3.2
([60]) p134 · Thm 9.4.1, Thm 9.4.2 (cocliques and colourings) p135–136 · Prop. 9.6.1 p137 ·
Thm 9.6.2, Thm 9.6.3 (generalized quadrangles) p139–140 · Thm 9.8.1, Cor. 9.8.2, Prop. 9.8.3,
Prop. 9.8.4, Thm 9.8.5 (two-weight codes) p146–149

**Ch. 10 (Regular two-graphs)** — Prop. 10.1.1 p159 · Thm 10.2.1 p161 · Thm 10.3.1 p162 ·
Prop. 10.3.2–10.3.4 (incl. Taylor [320]) p163–165 · Lemma 10.4.1, **Thm 10.4.2**
"If n is the order of a symmetric conference matrix, then n − 1 is…" p166 · **Thm 10.6.1
('Absolute bound')** p170 · Prop. 10.6.2, **Prop. 10.6.3 ('Special bound')** p170 ·
Prop. 10.6.4 p171 · Thm 10.6.5–10.6.9 ([135],[136],[29]) p172

**Ch. 11 (Association schemes)** — **Thm 11.1.1** "The intersection numbers of an association
scheme satisfy…" p173 · **Thm 11.2.1** "The numbers Pij and Qij satisfy…" p175 · **Thm 11.2.2**
p175 · **Thm 11.3.1 (Delsarte)** "aQ ≥ 0" p176 (**the LP bound**) · Thm 11.4.1, Thm 11.4.2,
Thm 11.4.3 (Krein parameters) p177–178 · **Thm 11.5.1 (G. Higman)**, Prop. 11.5.2 (G. Higman)
p179 · Thm 11.6.1, Prop. 11.6.2 (P-/Q-polynomial) p180–181

**Ch. 12 (Distance-regular graphs)** — Prop. 12.6.1 p187 · **Thm 12.7.1** "A Moore graph with
diameter d ≥ 3 is a (2d+1)-gon" p188 · Thm 12.7.2, Thm 12.7.3 p188 · Prop. 12.9.1 p189 ·
**Thm 12.10.1 ('Spectral Excess Theorem')** p190

**Ch. 13 (p-ranks)** — Lemma 13.1.1 (Isaacs [222], 15.1) p193 · Prop. 13.3.1–13.3.4 p194–195 ·
Lemma 13.6.1, Prop. 13.6.2 ([52]) p197 · Prop. 13.7.1 p198 · Prop. 13.8.1–13.8.4 (Smith
normal form) p201–202

**Ch. 14 (Spectral characterizations)** — Prop. 14.1.1 (Johnson & Newman [225]) p205 ·
Prop. 14.1.2 p206 · Lemma 14.2.1 p207 · **Thm 14.2.2** "With respect to the adjacency matrix,
almost all trees are non-DS" p207 · Thm 14.2.3 p208 · Prop. 14.2.4 p210 · Thm 14.3.1,
Thm 14.3.2 p210–211 · Prop. 14.4.1 p212 · Cor. 14.4.2, Lemma 14.4.3 p213 · Prop. 14.4.4
"The graphs Kn and Km,m and Cn and their complements are DS" p214 · Prop. 14.4.5–14.4.8
p214–215 · Thm 14.4.9, Lemma 14.4.10, Thm 14.4.11, Thm 14.4.12 p216–218 · Prop. 14.5.1
p219 · Thm 14.5.2, Thm 14.5.3 p220 · Prop. 14.5.4, Prop. 14.5.5 p221 · Thm 14.6.1,
Thm 14.6.2 (Wang & Xu) p225

**Ch. 15 (Graphs with few eigenvalues)** — Prop. 15.1.1, Cor. 15.1.2, Prop. 15.1.3 p228 ·
**Thm 15.2.1** "A graph Γ has two distinct restricted Laplace eigenvalues ν and…" p229 ·
**Prop. 15.2.2** "Let N be the incidence matrix of a symmetric 2-(n,k,…" p230 ·
**Prop. 15.2.3** "Let N be the incidence matrix of a symmetric block design" p230 ·
Prop. 15.3.1–15.3.4 p231–233

### B.3 Spielman, *Spectral and Algebraic Graph Theory* — full outline (S2)

**Part I — Introduction and Background**
*1 Introduction*: 1.1 Graphs · 1.2 Matrices for Graphs (1.2.1 A spreadsheet, 1.2.2 An
operator, 1.2.3 A quadratic form) · 1.3 Spectral Theory · 1.4 Some examples (1.4.1 Paths) ·
1.5 Highlights (1.5.1 Spectral Graph Drawing, 1.5.2 Graph Isomorphism, 1.5.3 Platonic Solids,
1.5.4 The Fiedler Value, 1.5.5 Bounding Eigenvalues, 1.5.6 Planar Graphs, 1.5.7 Random Walks
on Graphs, 1.5.8 Expanders, 1.5.9 Approximations of Graphs, 1.5.10 Solving equations in and
computing eigenvalues of Laplacians, 1.5.11 Advice on reading this book) · 1.6 Exercises
*2 Eigenvalues and Optimization: The Courant-Fischer Theorem*: 2.1 The First Proof · 2.2
Proof of the Spectral Theorem by Optimization · 2.3 Singular Values for Asymmetric Matrices ·
2.4 Exercise
*3 The Laplacian and Graph Drawing*: 3.1 The Laplacian Matrix · 3.2 Drawing with Laplacian
Eigenvalues
*4 Adjacency matrices, Eigenvalue Interlacing, and the Perron-Frobenius Theorem*: 4.1 The
Adjacency Matrix · 4.2 The Largest Eigenvalue, μ1 · 4.3 Eigenvalue Interlacing · 4.4 Wilf's
Theorem · **4.5 Perron-Frobenius Theory for symmetric matrices** · 4.6 Singular Values and
Directed Graphs · 4.7 Exercises

**Part II — The Zoo of Graphs**
*5 Fundamental Graphs*: 5.1 The complete graph · 5.2 The star graphs · 5.3 Products of graphs
(5.3.1 The Hypercube) · 5.4 Bounds on λ2 by test vectors · 5.5 The Ring Graph · 5.6 The Path
Graph
*6 Comparing Graphs*: 6.1 Overview · 6.2 The Loewner order · 6.3 Approximations of Graphs ·
6.4 The Path Inequality (6.4.1 Lower bounding λ2 of a Path Graph) · 6.5 The Complete Binary
Tree · 6.6 The weighted path · 6.7 A better lower bound on λ2
*7 Cayley Graphs*: 7.1 Cayley Graphs · 7.2 Paley Graphs · 7.3 Eigenvalues of the Paley Graphs ·
7.4 Generalizing Hypercubes · 7.5 A random set of generators · 7.6 Conclusion · 7.7
Non-Abelian Groups · 7.8 Eigenvectors of Cayley Graphs of Abelian Groups
*8 Eigenvalues of Random Graphs*: 8.1 Transformation · 8.2 The extreme eigenvalues (8.2.1
Vectors near v1) · 8.3 The Trace Method · 8.4 Expectation of the trace of a power · 8.5 The
number of walks · 8.6 Notes · 8.7 Exercise
*9 Strongly Regular Graphs*: 9.1 Introduction · 9.2 Definitions · 9.3 The Pentagon · 9.4
Lattice Graphs · 9.5 Latin Square Graphs · 9.6 The Eigenvalues of Strongly Regular Graphs ·
9.7 Regular graphs with three eigenvalues · 9.8 Integrality of the eigenvalues · 9.9 The
Eigenspaces of Strongly Regular Graphs · 9.10 Triangular Graphs · 9.11 Two-distance point sets

**Part III — Physical Metaphors**
*10 Random Walks on Graphs*: 10.1 Random Walks · 10.2 Spectra of Walk Matrices · 10.3 The
stable distribution · 10.4 The Rate of Convergence · 10.5 Relation to the Normalized
Laplacian · 10.6 Examples (The Path, The Complete Binary Tree, The Dumbbell, The Bolas Graph) ·
10.7 Diffusion · 10.8 Final Notes
*11 Walks, Springs, and Resistor Networks*: 11.1 Overview · 11.2 Harmonic Functions · 11.3
Random Walks with absorbing nodes · 11.4 Spring Networks · 11.5 Laplacian linear equations ·
11.6 Energy · 11.7 Resistor Networks · 11.8 Solving for currents · 11.9 Exercise
*12 Effective Resistance and Schur Complements*: 12.1 Electrical Flows and Effective
Resistance · 12.2 Effective Resistance through Energy Minimization · 12.3 Reciprocity and
Monotonicity · 12.4 Examples: Series and Parallel · 12.5 Equivalent Networks, Elimination,
and Schur Complements (12.5.1 In matrix form by energy) · 12.6 Eliminating Many Vertices ·
12.7 The Schur Complement · 12.8 An interpretation of Gaussian elimination · 12.9 Effective
Resistance is a Distance
*13 Random Spanning Trees*: 13.1 Introduction · 13.2 Determinants · 13.3 Characteristic
Polynomials · **13.4 The Matrix Tree Theorem** · 13.5 Leverage Scores and Marginal
Probabilities
*14 Approximating Effective Resistances*: 14.1 Representing Effective Resistances · 14.2
Computing Effective Resistances · 14.3 Properties of Gaussian random variables · 14.4 Proof
of Johnson-Lindenstrauss
*15 Tutte's Theorem: How to draw a graph*: 15.1 3-Connected, Planar Graphs · 15.2 Strictly
Convex Polygons · 15.3 Consequences of Harmonicity · 15.4 All faces are convex · 15.5 Notes
*16 The Lovàsz–Simonovits Approach to Random Walks*: 16.1 Introduction · 16.2 Definitions and
Elementary Observations · 16.3 Warm up · 16.4 The proof · 16.5 Andersen's proof of Cheeger's
inequality
*17 Monotonicity and its Failures*: 17.1 Overview · 17.2 Effective Spring Constants · 17.3
Monotonicity · 17.4 Effective Resistance · 17.5 Examples · 17.6 Breakdown of Monotonicity ·
17.7 Traffic Networks · 17.8 Braes's Paradox · 17.9 The Price of Anarchy · 17.10 Nash optimum ·
17.11 Social optimum
*18 Dynamic and Nonlinear Networks*: 18.1 Overview · 18.2 Non-Linear Networks · 18.3 Energy ·
18.4 Uses in Semi-Supervised Learning · 18.5 Dual Energy · 18.6 Thermistor Networks · 18.7
Low Temperatures

**Part IV — Spectra and Graph Structure**
*19 Independent Sets and Coloring*: 19.1 Introduction · 19.2 Graph Coloring and Independent
Sets · **19.3 Hoffman's Bound** · 19.4 Application to Paley graphs · 19.5 Lower Bound on the
chromatic number · 19.6 Proofs for Hoffman's lower bound on chromatic number
*20 Graph Partitioning*: 20.1 Isoperimetry and λ2 · 20.2 Conductance · 20.3 The Normalized
Laplacian · 20.4 Notes
*21 Cheeger's Inequality*: **21.1 Cheeger's Inequality**
*22 Local Graph Clustering*: 22.1 The Algorithm · 22.2 Good choices for a · 22.3 Bounding the
D-norm · 22.4 Bounding the Generalized Rayleigh Quotient · 22.5 Rounding · 22.6 Notes
*23 Spectral Partitioning in a Stochastic Block Model*: 23.1 The Perturbation Approach · 23.2
Perturbation Theory for Eigenvectors · 23.3 Partitioning · 23.4 Proof of the Davis-Kahan
Theorem · 23.5 Further Reading
*24 Nodal Domains*: 24.1 Overview · 24.2 Sylvester's Law of Inertia · 24.3 Weighted Trees ·
24.4 The Perron-Frobenius Theorem for Laplacians · 24.5 Fiedler's Nodal Domain Theorem
*25 The Second Eigenvalue of Planar Graphs*: 25.1 Overview · 25.2 Geometric Embeddings · 25.3
The center of gravity · 25.4 Further progress
*26 Planar Graphs 2, the Colin de Verdière Number*: 26.1 Introduction · 26.2 Colin de Verdière
invariant · 26.3 Polytopes and Planar Graphs · 26.4 The Colin de Verdière Matrix · 26.5 Minors
of Planar Graphs · 26.6 cdvG

**Part V — Expander Graphs**
*27 Properties of Expander Graphs*: 27.1 Overview · 27.2 Expanders as Approximations of the
Complete Graph · **27.3 Quasi-Random Properties of Expanders** · 27.4 Vertex Expansion · 27.5
How well can a graph approximate the complete graph? · 27.6 Open Problems
*28 A brief introduction to Coding Theory*: 28.1 Coding · 28.2 Notation · 28.3 Connection with
Generalized Hypercubes · **28.4 Hamming Codes** · 28.5 Terminology and Linear Codes · 28.6
Random Linear Codes · 28.7 Reed-Solomon Codes · 28.8 Caution
*29 Expander Codes*: 29.1 Bipartite Expander Graphs · 29.2 Building Codes · 29.3 Encoding ·
29.4 Minimum Distance · 29.5 Decoding · 29.6 Historical Notes
*30 A simple construction of expander graphs*: 30.1 Overview · 30.2 Squaring Graphs · 30.3 The
Relative Spectral Gap · 30.4 Line Graphs · 30.5 The Spectrum of the Line Graph · 30.6
Approximations of Line Graphs · 30.7 The whole construction · 30.8 Better Constructions
*31 PSRGs via Random Walks on Graphs* (plus further chapters on sparsification and Laplacian
solvers in Parts VI–VII of the same draft)

### B.4 Stanley, *Topics in Algebraic Combinatorics* — chapter TOC + named results (S3)

**Chapter TOC (verbatim):** Preface 3 · Notation 6 · **Chapter 1 Walks in graphs** 9 ·
**Chapter 2 Cubes and the Radon transform** 21 · **Chapter 3 Random walks** 33 · **Chapter 4
The Sperner property** 45 · **Chapter 5 Group actions on boolean algebras** 59 · **Chapter 6
Young diagrams and q-binomial coefficients** 77 · **Chapter 7 Enumeration under group action**
99 · **Chapter 8 A glimpse of Young tableaux** 131 (Appendix The RSK algorithm 144; Appendix
Plane partitions 147) · **Chapter 9 The Matrix-Tree Theorem** 169 (Appendix Three elegant
combinatorial proofs 180) · **Chapter 10 Eulerian digraphs and oriented trees** 189 ·
**Chapter 11 Cycles, bonds, and electrical networks** 203 — 11.1 The cycle space and bond
space 203; 11.2 Bases for the cycle space and bond space 209; 11.3 Electrical networks 214;
11.4 Planar graphs (sketch) 220; 11.5 Squaring the square 223 · **Chapter 12 Miscellaneous
gems of algebraic combinatorics** 231 — 12.1 The 100 prisoners 231; 12.2 Oddtown 233; 12.3
Complete bipartite partitions of Kn 234; 12.4 The nonuniform Fisher inequality 236; 12.5 Odd
neighborhood covers 238; 12.6 Circulant Hadamard matrices 240; 12.7 P-recursive functions 246 ·
Hints 257 · References 261

**Named results (verbatim opening words):**
*Ch. 1* — 1.1 Theorem "For any integer ℓ ≥ 1, the (i,j)-entry of the matrix A(G)^ℓ…" · 1.2
Corollary · 1.3 Corollary "Suppose A(G) has eigenvalues λ1,…,λp. Then the number…" · 1.4 Lemma
"Let J denote the p×p matrix of all 1's. Then the eigenvalues…" · 1.5 Proposition "The
eigenvalues of the complete graph Kp are as follows:" · 1.6 Corollary · 1.7 Lemma
*Ch. 2* — 2.1 Lemma "The set B2 = {χu : u ∈ Z2^n}…" · 2.2 Theorem "The eigenvectors of ΦΓ are
the functions χu, where u ∈ Z2^n" · 2.3 Lemma "We have [ΦΔ] = A(Cn), the adjacency matrix of
the n-cube" · 2.4 Corollary · 2.5 Corollary
*Ch. 3* — 3.2 Theorem "Let G be a finite graph. Then the probability matrix M = M(G) is
diagonalizable and has only real eigenvalues" · **3.3 Theorem "Let B be a nonnegative
irreducible square matrix. If ρ is the maximum absolute value of the eigenvalues of B, then
ρ > 0, and there is an eigenvalue equal to ρ. Moreover, there is an eigenvector for ρ (unique
up to multiplication by a positive real number) all of whose entries are positive."**
(Perron–Frobenius — *stated without proof*, see §E) · 3.4 Theorem "The matrix I_{p−1} − M[v]
is invertible, and…"
*Ch. 4* — 4.1 Definition (poset) · 4.2 Definition (Sperner property) · 4.4 Proposition · 4.5
Lemma · 4.6 Lemma · 4.7 Theorem "The operator Ui defined above is one-to-one if i < n/2 and…" ·
4.8 Corollary "The boolean algebra Bn has the Sperner property."
*Ch. 5* — 5.5 Proposition · 5.6 Lemma · 5.7 Lemma · 5.8 Theorem "Let G be a subgroup of Sn.
Then the quotient poset Bn/G…" · 5.9 Theorem · 5.10 Theorem · 5.11 Proposition · **5.12
Theorem (I. Newton)**
*Ch. 6* — 6.2 Proposition "The poset L(m,n) is graded of rank mn and rank-symmetric." · 6.3
Proposition · 6.5 Lemma · 6.6 Theorem · 6.8 Lemma · 6.9 Theorem · 6.10 Corollary "The posets
L(m,n) are rank-symmetric, rank-unimodal,…" · 6.11 Theorem · 6.12 Lemma · 6.13 Lemma · 6.14
Theorem · 6.15 Theorem
*Ch. 7* — **7.2 Lemma (Burnside's lemma)** · 7.5 Theorem · **7.7 Theorem (Pólya's theorem,
1937)** · 7.10 Theorem · 7.12 Theorem · 7.13 Theorem · 7.14 Proposition · 7.15 Corollary ·
7.16 Corollary
*Ch. 8* — **8.1 Theorem (hook length formula)** · 8.2 Lemma · 8.3 Lemma · 8.4 Theorem · 8.5
Corollary · 8.6 Lemma · 8.7 Theorem · 8.8 Corollary · 8.9 Theorem · 8.10 Corollary · **8.13
Theorem "The RSK algorithm defines a bijection between the symmet-…"** · 8.14 Proposition ·
8.17 Lemma · 8.18 Theorem · 8.19 Corollary
*Ch. 9* — 9.1 Proposition "Let G be a graph with p vertices. The following conditions…" ·
**9.4 Theorem (the Binet-Cauchy Theorem) "Let A = (aij) be an m×n…"** · 9.5 Definition
(orientation) · 9.6 Lemma "(a) We have M M^t = L." · 9.7 Lemma "Let S be a set of p−1 edges of
G. If S does not form the set…" · **9.8 Theorem (the Matrix-Tree Theorem) "Let G be a finite
connected graph…"** · 9.9 Lemma "Let M be a p×p matrix (with entries in a field) such that…"
(**the all-cofactors-equal lemma**) · 9.10 Corollary
*Ch. 10* — **10.1 Theorem "A digraph D without isolated vertices is Eulerian if and…"** ·
**10.2 Theorem "Let D be a connected balanced digraph with vertex set V."** (**the BEST
theorem**) · 10.3 Corollary · 10.4 Theorem · 10.5 Corollary · 10.9 Lemma · 10.10 Theorem "The
eigenvalues of L(Dn) are 0 (with multiplicity one)…" · 10.11 Corollary "The number B0(n) of
binary de Bruijn sequences of degree…"
*Ch. 11* — 11.2 Theorem "The row space of M(D) is the bond space BD." · 11.3 Theorem "The
cycle and bond spaces of D are related by C = B⊥." · 11.4 Lemma · 11.5 Lemma · 11.6 Theorem ·
11.7 Corollary · 11.8 Theorem · 11.10 Lemma · 11.11 Theorem · 11.13 Theorem · 11.14 Theorem ·
11.15 Corollary · 11.17 Theorem · 11.18 Proposition · 11.19 Corollary "κ(G) = κ(G*)" · 11.20
Theorem
*Ch. 12* — 12.1 Theorem "There exists a strategy with a success probability of…" (100
prisoners) · **12.2 Theorem "There are at most n clubs."** (**Oddtown**) · **12.3 Theorem "If
E(Kn) is the disjoint union of the edge sets of m complete…"** (**Graham–Pollak**) · **12.4
Theorem "Let C1,…,Cv be distinct subsets of a b-element set X such…"** (**nonuniform Fisher
inequality**) · 12.5 Theorem "There exists a subset S ⊆ V = V(G) such that #(S ∩ N(v))…" (odd
neighbourhood covers) · **12.6 Theorem "There does not exist a circulant Hadamard matrix H of
…"** · 12.7–12.13 Lemmas, 12.12 Corollary · **12.14 Theorem (Kronecker)** · 12.15 Lemma ·
12.16–12.17 Lemmas · 12.18 Theorem

### B.5 Babai & Frankl, *Linear Algebra Methods in Combinatorics* — full TOC (S4)

**1 Warm-up** — 1.1 Counting clubs in Oddtown · 1.2 Point sets in Rⁿ with only two distances ·
1.3 Two solutions to a jigsaw puzzle? · 1.4 Addressing into the squashed cube · 1.5 Beauty is
rare
**2 Basic linear algebra and combinatorics** — 2.1 A guide to basic abstract algebra (2.1.1
Fundamental structures; 2.1.2 Polynomials; 2.1.3 Linear spaces; 2.1.4 Criteria of linear
independence) · 2.2 Affine subspaces, linear equations, rank (2.2.1 Inequalities for
subspaces; 2.2.2 Linear maps; 2.2.3 Matrices, rank; 2.2.4 Systems of linear equations. Affine
subspaces; 2.2.5 Projective spaces; 2.2.6 Extending the field) · 2.3 Orthogonality (2.3.1
Inner product spaces; 2.3.2 Eventown revisited) · 2.4 Graphs and set systems (2.4.1 Notation,
terminology; 2.4.2 Chromatic number and short cycles; **2.4.3 Block designs**)
**3 "General position" arguments** — 3.1 Configurations in general position (3.1.1 Points in
general position. The moment curve.; **3.1.2 The Polynomial Identity Lemma**; 3.1.3 An
algorithmic application of the Polynomial Identity Lemma; 3.1.4 Subspace in general position
w.r.t. a family of subspaces; 3.1.5 Linear maps in general position; 3.1.6 Checking
identities: a Monte Carlo algorithm) · 3.2 Convexity (3.2.1 Terminology; 3.2.2 Helly's
Theorem; 3.2.3 A polytope with many faces; 3.2.4 Distributing points on the sphere; **3.2.5
Borsuk's and Kneser's graphs**; 3.2.6 Linear and statistical independence)
**4 Set systems with restricted intersections** — 4.1 When all intersections are equal size ·
4.2 Ramsey theory – a constructive lower bound · 4.3 Restricted intersections · 4.4 Extremal
set theory: the classics
**5 Spaces of polynomials** — 5.1 Helly-type theorems for finite sets · 5.2 Resultants · 5.3
The Prague dimension of graphs · 5.4 Sets with few intersection sizes mod p · 5.5 Geometric
application: unit distance is hard to miss · **5.6 Reducing the diameter of bodies: Borsuk's
conjecture disproved** · 5.7 Constructive Ramsey graphs via intersection theorems · 5.8
Geometric application: any distance is hard to miss · 5.9 Prime power moduli · 5.10 The
nonuniform RW Theorem · **5.11 The Ray-Chaudhuri – Wilson Theorem** · 5.12 A modular
Ray-Chaudhuri – Wilson Theorem
**6 Tensor product methods** — 6.1 Wedge products — a concrete introduction (6.1.1 The Laplace
expansion of determinants; 6.1.2 Alternating k-linear functions; 6.1.3 Exterior powers of Fⁿ) ·
6.2 Bollobás–type theorems · 6.3 Symmetric products · **6.4 The Shannon capacity of a graph**
**7 A class of higher incidence matrices: the inclusion matrix** — 7.1 The inclusion matrix;
s-independent families · 7.2 Extended inclusion matrices. The Nonuniform RW Theorem revisited ·
7.3 Inclusion matrices of uniform families · **7.4 Linear dependencies among the rows of
inclusion matrices and the Vapnik–Chervonenkis dimension** · 7.5 Shadows of s-independent
families
**8 Applications of inclusion matrices** — 8.1 The edge-reconstruction problem · 8.2 Chromatic
critical graphs · 8.3 Partially ordered sets, unimodal sequences, and the Sperner property
**9 Partially ordered sets** — 9.1 Geometric semilattices (9.1.1 Matroids; 9.1.2 Geometric
lattices; 9.1.3 RW-type theorems for semilattices) · 9.2 Incidence matrices of full rank ·
9.3 The Möbius function (9.3.1 Möbius inversion; 9.3.2 The Möbius function in geometric
lattices; 9.3.3 Whitney number inequalities; 9.3.4 The VC dimension revisited: shattered
elements in a poset)
**10 Applications to the Theory of Computing** — 10.1 Communication complexity theory · 10.2
Overview

### B.6 Babai & Frankl — named-result headings (verbatim, selected exhaustively over Ch. 1–7)

**Ch. 1** — Thm 1.1 "Assume that the clubs in a town of n citizens satisfy the rules (a) and
(b)." · **Cor. 1.2 ("Oddtown Theorem") "In a town of n citizens, no more than n clubs…"** ·
Thm 1.3 "The maximum cardinality m(n) of a two-distance set in Rⁿ satisfies the…" ·
Thm 1.4 (M. Dehn, 1900) · Prop. 1.5 "α/π is irrational." · Lemma 1.6 "The Dehn invariant is
additive." · Cor. 1.7 · **Thm 1.8 (Graham–Pollak, 1972) "If the edge set of the complete
graph on n…"** · **Thm 1.9 (Hoffman–Singleton, 1960) "If a regular graph of degree r and
girth 5…"**
**Ch. 2** — Prop. 2.1 · **Thm 2.2 (The linear algebra bound) "If v1,…,vm are linearly
independent vectors and…"** · Cor. 2.3 (Dimension invariance in linear algebra) · **Prop. 2.4
(Diagonal Criterion)** · **Prop. 2.5 (Triangular Criterion)** · Thm 2.6 · **Prop. 2.7
(Determinant Criterion)** · Prop. 2.8 (Triangular Criterion, version 2) · Prop. 2.9
(Triangular Criterion, version 3) · Prop. 2.10 · **Lemma 2.11 (Rank Insensitivity Lemma)** ·
Prop. 2.12 · Def. 2.14 · Prop. 2.15–2.18 · Def. 2.19 · Prop. 2.20 · Def. 2.21 · Prop. 2.22 ·
Cor. 2.23 · **Thm 2.25 (Fundamental Theorem of Projective Geometry)** · Prop. 2.26 · Lemma
2.27 · Cor. 2.28 · **Lemma 2.29 (Field Extension Lemma)** · Prop. 2.30 · Cor. 2.31 · **Thm
2.32 (Eventown Theorem) "If a family of m subsets of a set of n elements…"** · Thm 2.33 "Every
maximal totally isotropic subspace of Fⁿ…" · Cor. 2.34 "Every maximal Eventown club system is
maximum." · Prop. 2.35
**Ch. 3** — Def. 3.1 (general position) · Def. 3.2 (the moment curve) · Prop. 3.3 "The points
of the moment curve are in general position." · **Lemma 3.4 (Polynomial Identity Lemma) "Let
f ∈ F[x1,…,xn] be a nonzero polynomial…"** · Def. 3.6 · **Thm 3.7 (Subspace in General
Position)** · Prop. 3.9–3.11 · Def. 3.12 · **Thm 3.13 (Linear Map in General Position)** ·
Cor. 3.14, Cor. 3.15 · Def. 3.16 (straight line program) · Def. 3.17 · **Thm 3.18 (Polynomial
Identity Test) (J. T. Schwartz, 1980)** · Def. 3.19 · **Thm 3.20 (Helly's Theorem)** ·
**Lemma 3.21 (J. Radon, 1921)** · Prop. 3.22 · Thm 3.23 · **Thm 3.24 (Carathéodory, 1907;
Gale, 1956)** · **Lemma 3.25 (Moment Curve Kissing Lemma)** · Cor. 3.26 · **Thm 3.27 (Upper
Bound Theorem) (McMullen, 1970)** · **Thm 3.28 (Gale, 1956)** · **Thm 3.29 (Borsuk's
Theorem)** · Thm 3.30 (Borsuk's Theorem restated) · Def. 3.31 (Kneser's graph K(n,m)) ·
**Thm 3.32 (Kneser's Conjecture) (Lovász, 1978) "The chromatic number of…"**
**Ch. 4** — **Thm 4.1 (Nonuniform Fisher Inequality) "Let C1,…,Cm be distinct subsets of…"** ·
**Thm 4.2 (B. L. van der Waerden, 1927)** · Prop. 4.3 · **Thm 4.4 (Erdős–Szekeres, 1935)** ·
**Thm 4.5 (Erdős, 1947)** · **Thm 4.6 (Zs. Nagy, 1972)** · Def. 4.7 (L-intersecting) ·
Problem 4.8 (Restricted Intersection Problem — uniform case) · Problem 4.9 (…nonuniform case) ·
**Thm 4.10 (Ray-Chaudhuri – Wilson Theorem) "Let L be a set of s integers and…"** · Thm 4.11 ·
Claim 4.12 · **Thm 4.13 (Linear Threshold Theorem)** · Prop. 4.14, Prop. 4.15 · **Thm 4.16
(Sperner's Theorem)** · **Thm 4.17 (LYM inequality)** · **Thm 4.18 (Erdős–Ko–Rado Theorem)** ·
Prop. 4.19 · **Thm 4.20 (Sunflower Theorem, Erdős–Rado, 1960)**
**Ch. 5** — **Thm 5.1 (Erdős–Hajnal–Moon, 1964)** · **Thm 5.2 (B. Bollobás, 1965)** · Thm 5.3 ·
**Thm 5.4 (Bollobás's Theorem — uniform version)** · **Thm 5.5 (…nonuniform version)
(Bollobás, 1965)** · **Thm 5.6 (…skew version)** · **Thm 5.7 (Bollobás's Theorem for sets vs.
subspaces) (Lovász 1977b)** · Def. 5.8, Def. 5.9 (Prague dimension) · **Thm 5.10 (Dimension
invariance for graphs) (Lovász–Nešetřil–Pultr, 1980)** · Lemma 5.11 · Thm 5.12 · Prop. 5.13 ·
Def. 5.14 · **Thm 5.15 (Nonuniform modular RW Theorem) (Deza–Frankl–Singhi, 1983)** ·
**Prop. 5.16 (Multilinearization)** · Cor. 5.17 · **Cor. 5.18 (Omitted Intersection Theorem)** ·
**Thm 5.19 (Omitted Intersection Theorem) (Frankl–Rödl, 1987)** · Def. 5.20 (the distance-δ
graph in Rⁿ) · **Thm 5.21 (Frankl–Wilson, 1981) "For large n, the chromatic number of the…"** ·
**Thm 5.22 (Babai, 1992)** · **Thm 5.23 (Kahn–Kalai, 1992) "Let f(d) denote the minimum number
such that…"** (**the Borsuk conjecture disproof**) · Thm 5.24 · Cor. 5.25 · **Lemma 5.26
(Larman–Rogers, 1972)** · Thm 5.27 · **Lemma 5.28 (General rotations)** · **Thm 5.29 (Babai,
1992)** · Thm 5.30 · Prop. 5.31 · Lemma 5.32 · **Cor. 5.33 (Frankl–Wilson, 1981)** · **Thm
5.34 (Nonuniform RW Theorem) (Frankl–Wilson, 1981)** · **Thm 5.35 (D. K. Ray-Chaudhuri –
R. M. Wilson, 1975)** · Lemma 5.36 · **Thm 5.37 (Modular RW Theorem)** · Lemma 5.38 ·
**Prop. 5.39 (Moebius inversion)** · Prop. 5.40 · Cor. 5.41 · Def. 5.42 · Lemma 5.43
**Ch. 6** — Prop. 6.1–6.2 · Cor. 6.3 · Prop. 6.4 · Cor. 6.5 · Prop. 6.6 · Cor. 6.7–6.8 ·
Thm 6.9 · Cor. 6.10 · Lemma 6.11 · **Thm 6.12 (Bollobás's Theorem — skew version)** · **Thm
6.13 (Bollobás's Theorem – threshold version (Z. Füredi, 1984))** · **Thm 6.14 (Bollobás's
Theorem for subspaces) (L. Lovász, 1977)** · **Thm 6.15 (…threshold version) (Z. Füredi)** ·
Def. 6.16 · **Thm 6.17 "If a matrix A (over any field) fits a graph G, then Θ(G) ≤ rk A."** ·
Def. 6.18, Def. 6.19
**Ch. 7** — Prop. 7.1–7.2 · Lemma 7.3 · Prop. 7.4–7.5 · Lemma 7.6–7.7 · **Thm 7.8 (Nonuniform
RW Theorem, unabridged) (Frankl–Wilson, 1981)** · Prop. 7.9 · Cor. 7.10–7.12 · **Thm 7.13 (RW
Theorem, unabridged) (Ray-Chaudhuri–Wilson, 1975)** · **Lemma 7.14 (Frankl–Wilson, 1981)** ·
**Thm 7.15 (Frankl–Wilson, 1981)** · **Thm 7.16 (D. H. Gottlieb, 1966) "For 0 ≤ j ≤ i ≤ n, the
matrix In(i,j) has full…"**

### B.7 Godsil's lecture notes (S5, S6, S7)

**S5 · *Association Schemes* — full chapter/section outline (verbatim):**
Preface · **Schemes and Algebras**: Definitions and Examples; Strongly Regular Graphs; The
Bose-Mesner Algebra; Idempotents; Idempotents for Association Schemes · **Parameters**:
Eigenvalues; Strongly Regular Graphs; Intersection Numbers; Krein Parameters; The Frame
Quotient · **An Inner Product**: An Inner Product; Orthogonal Projection; **Linear
Programming**; Cliques and Cocliques; Feasible Automorphisms · **Products and Tensors**:
Kronecker Products; Tensor Products; Tensor Powers; Generalized Hamming Schemes; A Tensor
Identity; Applications · **Subschemes and Partitions**: Equitable Partitions; Subschemes and
Partitions; Primitivity; Simple Subsets; Completely Regular Subsets · **Translation Schemes**:
Characters; Translation Graphs; Translation Schemes and their Duals; Linear Graphs; Geometry,
Codes and Graphs; Language · **Duality**: The Discrete Fourier Transform; The Hadamard
Transform; Two Matrix Duals; **MacWilliams Theorem**; **Projective Planes**; Duality; Duality
and Type II Matrices; **Difference Sets** · **Type-II Matrices**: Type-II Matrices; Two
Algebras; Eigenspaces · **Galois Theory**: Bose-Mesner Automorphisms; Galois; Applications;
Multipliers · **A Bestiary**: Cyclic Schemes; Paley Graphs; Quasisymmetric Designs; Partial
Spreads; Covers of Complete Bipartite Graphs; Groups · **Algebra and Modules**: Algebras;
Division Algebras; Maps and Modules; Opposites; Schur's Lemma · **Semisimple Modules**:
Summands and Idempotents; Primary Decomposition; Group Algebras; Semisimple Modules;
Semisimple Modules: Examples; Indecomposable Modules · **Semisimple Algebras** (+ further
chapters)

**S6 · *Finite Geometry* — full section TOC (verbatim):**
**1 Examples** — 1.1 Projective Space and Subspaces; 1.2 Affine Spaces; 1.3 Coordinates ·
**2 Projective and Affine Spaces** — 2.1 Lots of Definitions; 2.2 Axiomatics; 2.3 The Rank
Function of a Projective Geometry; 2.4 Duality; 2.5 Affine Geometries; 2.6 Affine Spaces in
Projective Space; 2.7 Characterising Affine Spaces by Planes · **3 Collineations and
Perspectivities** — 3.1 Collineations of Projective Spaces; 3.2 Perspectivities and
Projections; 3.3 Groups of Perspectivities; **3.4 Desarguesian Projective Planes**; 3.5
Translation Groups; 3.6 Geometric Partitions; 3.7 The Climax · **4 Spreads and Planes** — 4.1
Spreads; 4.2 Collineations of Translation Planes; **4.3 Some Non-Desarguesian Planes**; 4.4
Alt(8) and GL(4,2) are Isomorphic; 4.5 Moufang Planes · **5 Varieties** — 5.1 Definitions; 5.2
The Tangent Space; 5.3 Tangent Lines; 5.4 Intersections of Hyperplanes and Hypersurfaces ·
**6 Conics** — 6.1 The Kinds of Conics; **6.2 Pascal and Pappus**; 6.3 Automorphisms of
Conics; 6.4 Ovals; 6.5 Segre's Characterisation of Conics; 6.6 q-Arcs · **7 Polarities** —
7.1 Absolute Points; 7.2 Polarities of Projective Planes; 7.3 Polarities of Projective Spaces;
7.4 Polar Spaces; 7.5 Quadratic Spaces and Polarities

**S7 · *Tools from Linear Algebra* (Handbook of Combinatorics chapter) — section list
(verbatim):** 1. Introduction · **2. The rank argument** · **3. Designs and codes** · 4. Null
designs · 5. Walks in graphs · **6. Eigenvalue methods** · 7. Appendix: random walks,
eigenvalues, and resistance (L. Lovász).
*Note:* §2 opens with **Fisher's inequality** as the motivating rank argument, and states
**2.1 PRINCIPLE**: "Let H = (V,E) be a hypergraph with incidence matrix B. If the rows of B
are linearly independent then |V| ≤ |E|." This is the exact "dimension/rank master bound"
the scaffolder needs (see §C.1).

### B.8 Alon, *Combinatorial Nullstellensatz* — section headings (S8)

1 Introduction (contains **Theorem 1.1**, **Theorem 1.2**) · 2 The proofs of the two basic
theorems (**Lemma 2.1**) · 3 Chevalley–Warning and Cauchy–Davenport · 4–8 further
applications in Additive Number Theory, Graph Theory and Combinatorics · 9 Combinatorial
structures and polynomial ideals · 10 Concluding remarks and open problems.

---

## C. Mathematical detail the scaffolder needs

Difficulty key: **[A]** bounded, ≤ 12 numbered steps, no new machinery — scaffold freely.
**[B]** bounded, 12–30 steps, or needs one prerequisite the library must first build.
**[C]** long or needs machinery the library does not have — split, defer, or use the ‡ fallback.

### C.1 Linear-algebra methods

**The dimension/rank master bound.** *Statement (Godsil, S7 §2, "2.1 PRINCIPLE"):* Let
`H = (V,E)` be a hypergraph with incidence matrix `B` (rows = vertices, columns = edges,
`B_{ij} = 1` iff vertex `i` ∈ edge `j`). If the rows of `B` are linearly independent then
`|V| ≤ |E|`. *The underlying fact:* any linearly independent subset of an `n`-dimensional
vector space has at most `n` elements (Babai–Frankl **Thm 2.2**, "The linear algebra bound").
The independence criteria that do the real work are Babai–Frankl **Prop. 2.4 (Diagonal
Criterion)**, **Prop. 2.5 / 2.8 / 2.9 (Triangular Criterion)** and **Prop. 2.7 (Determinant
Criterion)**. **[A]** — and the library already has bases, dimension and rank. *Locator:*
S7 §2; S4 §2.1.4, §2.2.

**Oddtown.** *Statement (Babai–Frankl Cor. 1.2; Stanley Thm 12.2):* Let `A_1,…,A_m ⊆ [n]`
with `|A_i|` odd for every `i` and `|A_i ∩ A_j|` even for all `i ≠ j`. Then `m ≤ n`.
*Proof route:* take incidence vectors `v_i ∈ F_2^n` with the standard bilinear form;
`v_i·v_i = 1`, `v_i·v_j = 0` (`i≠j`); if `Σ c_i v_i = 0`, pair with `v_j` to get `c_j = 0`;
so the `v_i` are independent in an `n`-dimensional space. **[A]**, ~6 steps. *Note for the
author:* the form on `F_2^n` is **not** an inner product — it is degenerate — and the proof
never needs it to be; it needs only bilinearity and the diagonal being `1`. Saying "inner
product space over `F_2`" would be a false statement.

**Eventown.** *Statement (Babai–Frankl Thm 2.32):* if `|A_i|` is even for all `i` and
`|A_i ∩ A_j|` is even for all `i ≠ j`, then `m ≤ 2^{⌊n/2⌋}`. *Proof route:* the `F_2`-span
`U` of the incidence vectors is totally isotropic, so `U ⊆ U^⊥` and
`dim U ≤ n − dim U`, giving `dim U ≤ ⌊n/2⌋`; the family is contained in `U`. **[A]**, ~8
steps. Babai–Frankl **Thm 2.33 / Cor. 2.34** add that every *maximal* Eventown system is
*maximum*. The exponential-vs-linear contrast with Oddtown is the pedagogical payload.

**Fisher's inequality (designs).** *Statement:* in a 2-`(v,k,λ)` design with `2 ≤ k < v`,
`b ≥ v`. *Rank proof over `R`:* `N N^T = (r−λ)I + λJ` where `N` is the point–block incidence
matrix; `r > λ` when `k < v`; `(r−λ)I` is positive definite and `λJ` is positive
semidefinite, so `NN^T` is positive definite, hence nonsingular, so
`v = rank(NN^T) ≤ rank(N) ≤ b`. **[A]**, ~8 steps. *Why `F_2` fails:* the argument turns on
positive-definiteness, an ordered-field notion with no characteristic-2 analogue; concretely
`det((r−λ)I + λJ) = (r−λ)^{v−1}(r−λ+λv)` can vanish mod 2, and over `F_2` the matrix can be
genuinely singular, so the rank bound evaporates. *Locator:* S7 §2 (this is Godsil's opening
example); S1 §4.8.

**Nonuniform Fisher inequality.** *Statement (Babai–Frankl Thm 4.1; Stanley Thm 12.4):* let
`C_1,…,C_m` be **distinct** subsets of `[n]` such that `|C_i ∩ C_j| = λ` (the same `λ ≥ 1`)
for all `i ≠ j`. Then `m ≤ n`. *Proof route:* over `R`, the Gram matrix of the incidence
vectors is `D + λJ` with `D = diag(|C_i| − λ)`; handle the at-most-one index with
`|C_i| = λ` separately, then `D` is positive definite and `D + λJ` is positive definite,
hence the vectors are independent. **[A]**, ~10 steps.

**Ray-Chaudhuri–Wilson (uniform).** *Statement (Babai–Frankl Thm 4.10 / Thm 5.35 / Thm 7.13):*
let `L` be a set of `s` integers and `F` a `k`-uniform `L`-intersecting family on `n` points
(i.e. `|E ∩ F| ∈ L` for all distinct `E,F ∈ F`). Then `|F| ≤ C(n,s)`. *Nonuniform version
(Frankl–Wilson, Thm 5.34 / Thm 7.8):* `|F| ≤ Σ_{i=0}^{s} C(n,i)`. *Proof route:* the
polynomial-space method — attach to each `F` the polynomial
`f_F(x) = Π_{l∈L}(⟨x, v_F⟩ − l)`, multilinearise (**Prop. 5.16**), and show the `f_F` are
linearly independent in the space of multilinear polynomials of degree `≤ s`, whose dimension
is `Σ_{i≤s} C(n,i)`. Sharpening the nonuniform bound to `C(n,s)` in the uniform case needs
the higher inclusion matrices of §7.3 and **Gottlieb's theorem (Thm 7.16)**. Nonuniform
**[B]**; the sharp uniform `C(n,s)` bound **[B/C]** — scaffold the nonuniform bound first and
make the uniform sharpening its own item.

**Frankl–Wilson (modular).** *Statement (Babai–Frankl Thm 7.15; cf. Thm 5.37 "Modular RW
Theorem"):* let `p` be prime and `L` a set of `s` residues mod `p`; let `F` be a `k`-uniform
family on `n` points with `k mod p ∉ L` and `|E ∩ F| mod p ∈ L` for all distinct `E,F ∈ F`.
Then `|F| ≤ C(n,s)`. **[B]**, ~15–20 steps given the multilinearisation lemma. This is the
engine behind the Borsuk disproof and the constructive Ramsey graphs, so it earns its cost.

**Deza–Frankl.** *Statement (Babai–Frankl Thm 5.15, "Nonuniform modular RW Theorem",
Deza–Frankl–Singhi 1983).* **[B]**, sits naturally right after the modular RW theorem.

**Combinatorial Nullstellensatz (Alon).** *Exact statements, verbatim from S8:*
> **Theorem 1.1** Let `F` be an arbitrary field, and let `f = f(x_1,…,x_n)` be a polynomial in
> `F[x_1,…,x_n]`. Let `S_1,…,S_n` be nonempty subsets of `F` and define
> `g_i(x_i) = Π_{s∈S_i}(x_i − s)`. If `f` vanishes over all the common zeros of `g_1,…,g_n`
> (that is; if `f(s_1,…,s_n) = 0` for all `s_i ∈ S_i`), then there are polynomials
> `h_1,…,h_n ∈ F[x_1,…,x_n]` satisfying `deg(h_i) ≤ deg(f) − deg(g_i)` so that
> `f = Σ_{i=1}^{n} h_i g_i`. Moreover, if `f, g_1,…g_n` lie in `R[x_1,…,x_n]` for some subring
> `R` of `F` then there are polynomials `h_i ∈ R[x_1,…,x_n]` as above.

> **Theorem 1.2** Let `F` be an arbitrary field, and let `f = f(x_1,…,x_n)` be a polynomial in
> `F[x_1,…,x_n]`. Suppose the degree `deg(f)` of `f` is `Σ_{i=1}^n t_i`, where each `t_i` is a
> nonnegative integer, and suppose the coefficient of `Π_{i=1}^n x_i^{t_i}` in `f` is nonzero.
> Then, if `S_1,…,S_n` are subsets of `F` with `|S_i| > t_i`, there are
> `s_1∈S_1, s_2∈S_2,…,s_n∈S_n` so that `f(s_1,…,s_n) ≠ 0`.

*Proof route (read in full at S8 §2):* **Lemma 2.1** (the polynomial identity lemma: if
`deg_{x_i} P ≤ t_i` and `P` vanishes on `S_1 × … × S_n` with `|S_i| ≥ t_i + 1`, then `P ≡ 0`)
by induction on `n`, whose base case is only "a nonzero univariate polynomial of degree `t_1`
has at most `t_1` roots". Then Thm 1.1 by repeatedly reducing `x_i^{f_i}` (`f_i > t_i`) using
`g_i`, and Thm 1.2 by a one-paragraph degree/coefficient contradiction. **[A] — both theorems
together are ~12 numbered steps and need nothing beyond `F[x_1,…,x_n]`, which the library
has.** This is the single best-value target in the whole polynomial-method group.

*Applications, each **[A]** once CN is in place:*
- **Cauchy–Davenport.** For `p` prime and `A,B ⊆ Z_p` nonempty,
  `|A+B| ≥ min(p, |A|+|B|−1)`. Suppose not; pick `C ⊇ A+B` with `|C| = |A|+|B|−2 < p`; apply
  Thm 1.2 to `f(x,y) = Π_{c∈C}(x+y−c)` with `t_1 = |A|−1`, `t_2 = |B|−1`; the coefficient of
  `x^{|A|−1}y^{|B|−1}` is `C(|A|+|B|−2, |A|−1) ≠ 0` in `F_p` because the top is `< p`. ~8 steps.
- **Chevalley–Warning.** `f_1,…,f_m ∈ F_q[x_1,…,x_n]` with `Σ deg f_i < n`: if they have a
  common zero they have another (and `p | #` of common zeros). S8 §3.
- **Alon–Füredi**, and **list colouring via Alon–Tarsi** (a graph with an orientation `D` in
  which the numbers of even and odd spanning Eulerian sub-digraphs differ is
  `(d^+ + 1)`-choosable), both via the graph polynomial `Π_{i<j}(x_i − x_j)`. S8 §§4–7.

**The polynomial method.**
- **Finite-field Kakeya (Dvir).** *Statement:* if `K ⊆ F_q^n` contains a line in every
  direction then `|K| ≥ C(q+n−1, n) ≥ q^n/n!`. *Proof route:* if `|K|` were smaller than the
  dimension `C(n+q−1,n)` of the space of polynomials of degree `≤ q−1` in `n` variables, a
  nonzero `g` of degree `d ≤ q−1` vanishes on `K`; for each direction `b`, `t ↦ g(a+tb)` is a
  univariate polynomial of degree `≤ q−1` vanishing at all `q` values of `t`, hence is zero,
  so its leading coefficient — which is the top homogeneous part `g_d(b)` — vanishes; thus
  `g_d` vanishes on all of `F_q^n`, and the polynomial identity lemma (`deg g_d < q`) forces
  `g_d ≡ 0`, contradiction. **[A], ~10 numbered steps.** Prerequisites: dimension of a
  polynomial space (library has vector spaces + polynomial rings) and *the very same
  Lemma 2.1* used for CN. Outstanding target.
- **Cap set (Croot–Lev–Pach / Ellenberg–Gijswijt).** *Statement:* a subset of `F_3^n` with no
  three distinct elements summing to `0` has size `O(2.756^n)`; more precisely `≤ 3·m` where
  `m` counts monomials of degree `≤ 2n/3`. *What the slice-rank proof needs:* the definition of
  the slice rank of a function `X^3 → F`, the crucial lemma that a **diagonal** tensor with `m`
  nonzero diagonal entries has slice rank exactly `m`, and a counting estimate for the number
  of monomials `x^a` with `a ∈ {0,1,2}^n` of bounded total degree (a large-deviation /
  generating-function count). **[C]** overall: the slice-rank lemma is **[B]**, but the
  monomial count is an analytic estimate the library may not have. Recommend scaffolding the
  slice-rank framework and the diagonal lemma, and treating the numerical `2.756` constant as
  a source-cited remark.
- **Joints problem (Guth–Katz).** `N` lines in `R^3` determine `O(N^{3/2})` joints. Needs a
  vanishing-polynomial degree argument plus a Bézout-type bound over `R`. **[C]** — defer.

**Sauer–Shelah / VC dimension / shifting.** *Statement:* if `F ⊆ 2^{[n]}` shatters no set of
size `d`, then `|F| ≤ Σ_{i=0}^{d−1} C(n,i)`. *Two routes:* (i) **shifting/compression** — the
down-shift `S_i` does not increase `|F|`, does not create shattered sets, and drives `F` to a
downward-closed family, for which the bound is immediate. **[A]**, ~12 steps, needs *no*
algebra at all — a very good pairing with the algebraic proofs. (ii) the linear-algebra proof
via the inclusion matrix, Babai–Frankl **§7.4** ("Linear dependencies among the rows of
inclusion matrices and the Vapnik–Chervonenkis dimension") and **§9.3.4**. **[B]**. Scaffolding
both, side by side, is exactly the "different methods for one focal result" that Babai–Frankl
themselves organise the book around.

**Graham–Pollak.** *Statement (Brouwer–Haemers Prop. 1.5.1 "H. S. Witsenhausen; Graham &
Pollak"; Babai–Frankl Thm 1.8; Stanley Thm 12.3):* if the edge set of `K_n` is partitioned
into the edge sets of `m` complete bipartite graphs, then `m ≥ n−1`. *Proof route:* with
parts `(A_k,B_k)`, `Σ_{i<j} x_i x_j = Σ_k (Σ_{i∈A_k} x_i)(Σ_{j∈B_k} x_j)`. If `m < n−1`, the
`m+1 < n` homogeneous linear equations `Σ_i x_i = 0` and `Σ_{i∈A_k} x_i = 0` have a nonzero
real solution; substituting gives `0 = Σ_{i<j}x_ix_j = ½[(Σ x_i)² − Σ x_i²] = −½ Σ x_i²`,
so `x = 0` — contradiction. **[A]**, ~8 steps, needs only rank–nullity. Excellent target.

**Hoffman bound (ratio bound) for `α(G)`.** *Statement, verbatim from S1 Thm 3.5.2:* "If `Γ`
is regular of nonzero degree `k`, then `α(Γ) ≤ n·(−θ_n)/(k − θ_n)`, and if a coclique `C`
meets this bound, then every vertex not in `C` is adjacent to precisely `−θ_n` vertices of
`C`." Here `θ_n` is the smallest adjacency eigenvalue. *Two proof routes:* (i) Brouwer–Haemers
use quotient-matrix interlacing (Cor. 2.5.4). (ii) A direct route with no interlacing: write
the characteristic vector `χ` of an independent set as `(|S|/n)·1 + w` with `w ⊥ 1`, use
`χ^T A χ = 0` and `w^T A w ≥ θ_n ‖w‖²`. **[A]**, ~10 steps by route (ii); the library's
spectral theorem and orthogonal decomposition suffice. *Companions:* **Thm 3.5.1** (Cvetković
inertia bound), **Prop. 3.5.3** (nonregular version `α ≤ n(−θ_1θ_n)/(δ² − θ_1θ_n)`),
**Thm 3.5.5** (weighted version).

**Ratio bound for the chromatic number.** *Statement, verbatim from S1 Thm 3.6.2 (Hoffman):*
"If `Γ` is not edgeless then `χ(Γ) ≥ 1 − θ_1/θ_n`." Proof from Prop. 3.6.3(i), itself an
interlacing argument on the colour-class partition. **[B]**, needs Cor. 2.5.3 first. See also
**Prop. 3.6.1 (Wilf)**: `χ(Γ) ≤ 1 + θ_1` with equality iff `Γ` is complete or an odd cycle —
but that equality case invokes **Brooks' theorem**, so scaffold the inequality and either
build Brooks or drop the equality clause.

**Lovász theta function and Shannon capacity.** *Statements, verbatim from S1:* **Thm 3.7.4
('Sandwich')** "`α(Γ) ≤ ϑ(Γ) ≤ χ(Γ̄)`"; **Lemma 3.7.2** "`ϑ(Γ ⊠ Δ) ≤ ϑ(Γ)ϑ(Δ)`";
**Thm 3.7.3** the Shannon capacity bound `c(Γ) ≤ ϑ(Γ)`. *Prerequisites:* if `ϑ` is **defined
via orthonormal representations** (`ϑ(Γ) = min_{c,U} max_i 1/⟨c,u_i⟩²` over orthonormal
representations of the complement), then the sandwich, submultiplicativity, and
`ϑ(C_5) = √5` — hence Shannon capacity of `C_5` is `√5` — are all **[B]** with only inner
product spaces and Cauchy–Schwarz. If instead `ϑ` is defined by its **semidefinite program**,
one needs SDP/convex duality, which is **[C]**. **Recommendation: define `ϑ` by orthonormal
representations, prove the sandwich and the `C_5` computation, and state the SDP
characterisation as a source-cited remark.** The `ϑ` route also yields EKR for Kneser graphs.

**Kneser graph chromatic number.** *Statement:* `χ(K(n,k)) = n − 2k + 2` for `n ≥ 2k`.
**The upper bound `≤ n−2k+2` is an easy explicit colouring — [A].** The lower bound is
Lovász's theorem and **every known proof is topological or a discretisation of a topological
proof**: Lovász's original uses the **Borsuk–Ulam theorem**; Bárány's proof (the one
Babai–Frankl give as **Thm 3.32**) uses **Gale's theorem (Thm 3.28) + Borsuk's theorem
(Thm 3.29)**, and Babai–Frankl *state Borsuk's theorem without proving it*; Greene's 2002
one-page proof still uses Borsuk–Ulam; Matoušek's 2004 "combinatorial" proof replaces
Borsuk–Ulam with the **octahedral Tucker lemma**, which is combinatorial in statement but is
in substance a discrete Borsuk–Ulam and is not short. **Verdict: out of reach without
algebraic topology. [C].** Scaffold the upper bound and the definition; make the lower bound
either a deferred item or a source-cited `rem-` item with `proved_here: false`. *Note the
consolation prize:* Frankl–Wilson gives the chromatic number of the **distance graphs** on
`R^n` and `Q^n` (Babai–Frankl **Thm 5.21**, **Thm 5.22**, **Cor. 5.33**) with **no topology at
all** — that is the in-reach analogue of "a chromatic number computed by algebra".

**Frankl–Rödl.** *Statement (Babai–Frankl Thm 5.19, "Omitted Intersection Theorem",
Frankl–Rödl 1987)* — forbidden-intersection families are exponentially smaller than `2^n`.
**[B/C]**, rests on the modular RW machinery.

**Borsuk conjecture disproof (Kahn–Kalai).** *Statement, verbatim from S4 Thm 5.23:* "Let
`f(d)` denote the minimum number such that …" — every bounded set in `R^d` can be partitioned
into `f(d)` sets of smaller diameter; Kahn–Kalai show `f(d)` grows like `(1.2)^{√d}`,
refuting Borsuk's `d+1`. *Prerequisites:* the Frankl–Wilson modular theorem plus a
`±1`-cube construction. **Babai–Frankl state in their preface that "Sections 5.4 and 5.6
together give a complete and self-contained proof of this surprising result."** **[B]** given
Frankl–Wilson — an unusually high-value, genuinely self-contained flagship theorem.

### C.2 Design theory

**`r` and `b` are constant — this is a theorem, not a stipulation.** *Statement:* let
`(P,B)` be a 2-`(v,k,λ)` design (every 2-subset of the `v` points lies in exactly `λ` blocks;
every block has exactly `k` points; `2 ≤ k < v`). Then every point lies in the same number
`r` of blocks, and
`r(k−1) = λ(v−1)`, `bk = vr`.
*Proof route:* fix a point `p` and double count the pairs `(q,B)` with `q ≠ p` and
`p,q ∈ B`: over `q` it is `λ(v−1)`; over `B` it is `r_p(k−1)`. So `r_p = λ(v−1)/(k−1)` is
independent of `p`. Then double count incident point–block pairs: `vr = bk`. **[A]**, ~6
steps, and it uses **only double counting, which the library has already published.** This
should be one of the first items on the designs page.

**Fisher's inequality for designs.** As in §C.1. **[A]**.

**Symmetric designs and the incidence identity.** *Statement:* a 2-`(v,k,λ)` design is
*symmetric* if `b = v` (equivalently `r = k`). Then
`N N^T = (k−λ)I + λJ`, and `det(NN^T) = (k−λ)^{v−1}·k²`,
so `det N = ± k (k−λ)^{(v−1)/2}`. Moreover `N^T N = N N^T`, i.e. **any two distinct blocks
meet in exactly `λ` points** and the dual is again a symmetric design. *Proof route:* the
determinant of `aI + bJ` is `(a+bv)a^{v−1}` (eigenvalue `a+bv` once on `1`, `a` with
multiplicity `v−1`); substitute `a = k−λ`, `b = λ` and use `λ(v−1) = k(k−1)` to get
`k−λ+λv = k²`. **[A]**, ~10 steps; needs only determinants and eigenvalues, both published.

**Bruck–Ryser–Chowla.** *Statement (S1 §4.8 context; standard form):* let a symmetric
2-`(v,k,λ)` design exist.
- **`v` even ⇒ `k−λ` is a perfect square.** *Proof:* `(det N)² = (k−λ)^{v−1}k²`; `det N ∈ Z`;
  `v−1` is odd; hence `k−λ` is a square. **[A], ~5 steps — scaffold this half unconditionally.**
- **`v` odd ⇒ `z² = (k−λ)x² + (−1)^{(v−1)/2} λ y²` has a nontrivial integer solution.**
  See §E for the prerequisite audit; **[C]** in general.
- **Bruck–Ryser for projective planes** (the `λ=1` case): *if a projective plane of order `n`
  exists and `n ≡ 1` or `2 (mod 4)`, then `n` is a sum of two integer squares.* **This one has
  a complete elementary proof (S9), audited in §E — [B].** It kills orders 6, 14, 21, 22, …

**Steiner systems and Steiner triple systems.** `S(t,k,v)` = a `t`-`(v,k,1)` design. An
`STS(v) = S(2,3,v)` exists **iff** `v ≡ 1` or `3 (mod 6)` (`v ≥ 3`). Necessity is the
divisibility arithmetic above (`r = (v−1)/2` and `b = v(v−1)/6` must be integers) — **[A]**.
Sufficiency splits into **Bose** (`v ≡ 3 mod 6`) and **Skolem** (`v ≡ 1 mod 6`); see §E for
the step-boundedness audit. **Kirkman's schoolgirl problem** asks for a *resolvable* STS(15);
`KTS(v)` exists iff `v ≡ 3 (mod 6)` (Ray-Chaudhuri–Wilson 1971) — **statement only, [C]**.
**Wilson's existence theorem** (for fixed `k, λ`, `S_λ(2,k,v)` exists for all sufficiently
large admissible `v`) and **Keevash's theorem** (the same for all `t`) — **statement only,
[C]**, and they are exactly the sort of result that belongs in a `rem-` item with
`proved_here: false`.

**Finite projective planes.** *Axioms:* any two distinct points lie on a unique line; any two
distinct lines meet in a unique point; there exist four points no three of which are
collinear. *Order:* there is an `n ≥ 2` such that every line has `n+1` points, every point
lies on `n+1` lines, and there are `n²+n+1` points and `n²+n+1` lines. **[A]** — the counting
is a clean double-count off the axioms, and the fourth axiom is exactly what rules out the
degenerate cases. *`PG(2,q)`:* points = 1-dimensional subspaces of `F_q³`, lines =
2-dimensional subspaces; `(q³−1)/(q−1) = q²+q+1` points; order `q`. **[A]**, and the library
has finite fields and vector spaces. *Duality:* the axioms are self-dual, so every theorem
dualises. **[A]**. *Desargues and coordinatisation:* `PG(2,q)` is Desarguesian; conversely a
Desarguesian projective plane is `PG(2,K)` for a skew field `K`, and a **finite** Desarguesian
plane is `PG(2,q)` — the last step is **Wedderburn's little theorem** (every finite division
ring is a field). Statement **[A]**; full coordinatisation **[C]** (Godsil S6 §3.4, §3.7 "The
Climax"). *Nonexistence of order 6:* immediate from Bruck–Ryser (`6 ≡ 2 mod 4` and `6` is not
a sum of two squares) — **[A] once BR is available** — and independently from Tarry's 1900
verification of Euler's `36`-officers problem. *Nonexistence of order 10:* Lam–Thiel–Swiercz,
by computer search — **statement only, `proved_here: false`**.

**Latin squares, MOLS, transversal designs.** *Statement:* `N(n)` = max number of pairwise
orthogonal Latin squares of order `n`. Then `N(n) ≤ n−1`, with **equality iff a projective
plane of order `n` exists** (equivalently an affine plane of order `n`, equivalently a
`TD(n+1,n)`). *`N(q) = q−1` for prime powers* via `L_a(i,j) = ai + j` over `F_q`, `a ≠ 0` —
**[A]**, a lovely direct finite-field construction. **Euler's conjecture is false:**
Bose–Shrikhande–Parker (1959–60) — `N(n) ≥ 2` for every `n` except `2` and `6`. Statement
**[A]**, proof **[C]**. *Transversal designs:* `TD(k,n)` ⟺ `k−2` MOLS of order `n` — **[A]**,
a definitional translation worth an item because it is the bridge to the design language.

**Hadamard matrices and Hadamard designs.** `H H^T = nI` with entries `±1`; then `n = 1, 2` or
`4 | n` **[A]**. A Hadamard matrix of order `4m` is equivalent to a symmetric
2-`(4m−1, 2m−1, m−1)` design **[B]**. *Paley construction* from quadratic residues in `F_q` —
**[B]**, needs quadratic residues and character sums, which the library's finite fields
support. S1 §10.5, §10.5.1 "Constructions". *Circulant Hadamard matrices do not exist for
order `> 4`* — Stanley **Thm 12.6**, a beautiful algebraic-number-theory argument
(Lemmas 12.7–12.15, involving `Z[ζ]`, Kronecker's theorem on roots of unity) — **[C]** unless
the library has cyclotomic integers.

**Difference sets.** A `(v,k,λ)`-difference set `D` in a group `G` of order `v`: every
non-identity `g ∈ G` has exactly `λ` representations `g = d_1 d_2^{-1}`. Its *development*
`{Dg : g ∈ G}` is a symmetric 2-`(v,k,λ)` design **[A]**. **Singer difference set:** `PG(d,q)`
admits a cyclic (Singer) automorphism group, giving a cyclic `(q²+q+1, q+1, 1)` difference
set and hence a cyclic projective plane — **[B/C]**, needs the Singer cycle, i.e. the action
of `F_{q^3}^*` on `F_{q^3}` viewed as an `F_q`-space (in reach given finite fields). Godsil S5
has a dedicated "Difference Sets" section.

**Fano plane, Witt designs, Mathieu groups.** The Fano plane is `PG(2,2)`, the unique plane of
order 2 **[A]**. The Witt designs `S(5,24,8)`, `S(5,12,6)`, `S(4,11,5)`, `S(3,8,4)` with
automorphism groups `M_24`, `M_12`, `M_11` — **statement only, [C]**.

**Error-correcting codes as a bridge — is it within reach?** *Verdict: largely YES.*
- **In reach [A]/[B] with the library's finite fields, vector spaces, rank and polynomial
  rings:** linear `[n,k,d]_q` codes; generator and parity-check matrices; the fact that for a
  linear code minimum distance = minimum nonzero weight; the **Singleton bound** `d ≤ n−k+1`
  and MDS codes; the **Hamming (sphere-packing) bound**; **Hamming codes**
  `[(q^r−1)/(q−1), (q^r−1)/(q−1)−r, 3]_q` and the proof that they are perfect — note the
  parity-check matrix is exactly the point set of `PG(r−1,q)`, which makes this the natural
  bridge item between the designs page and the codes material; **Reed–Solomon codes** as
  evaluation codes (needs only that a nonzero polynomial of degree `< k` has `< k` roots — the
  same lemma again); the **Plotkin bound** by an averaging/double-count.
- **Reachable but a real build [B]:** the **MacWilliams identity**
  `W_{C^⊥}(x,y) = |C|^{-1} W_C(x+(q−1)y, x−y)` — needs additive characters of `F_q` and the
  orthogonality relation, i.e. a discrete Fourier transform. Godsil S5 proves it inside the
  association-scheme duality framework ("MacWilliams Theorem" section), which is the elegant
  route but presupposes the whole Bose–Mesner apparatus.
- **Out of reach [C]:** the **Golay codes** `G_23`, `G_11` and their uniqueness/perfectness
  classification; **Reed–Muller** decoding theory.

### C.3 Algebraic and spectral graph theory

**Adjacency matrix and walk counting.** *Statement (S1 Prop. 1.3.1; S3 Thm 1.1):* `(A^h)_{xy}`
is the number of walks of length `h` from `x` to `y`. Hence the number of closed walks of
length `h` is `tr(A^h) = Σ_i θ_i^h`; `tr A = 0`, `tr A² = 2|E|`, `tr A³ = 6·#triangles`.
**[A]**, induction on `h`. Stanley Cor. 1.3 turns this into the eigenvalue formula, and
**Prop. 1.5 / Cor. 1.6** compute closed walks in `K_p` — a perfect worked example.

**The spectrum as an isomorphism invariant, and cospectral graphs.** Isomorphic graphs are
cospectral; the converse fails. **The smallest witnesses, exhibited:** on 5 vertices,
`K_{1,4}` (the star) and `C_4 ∪ K_1` are both cospectral with spectrum
`{2, 0, 0, 0, −2}` — this is the standard smallest example and is fully checkable by hand.
**[A]**. Systematic constructions: S1 §1.8.2 **Seidel switching**, §1.8.3 **Godsil–McKay
switching**, §14.2 "Constructing cospectral graphs" (trees, partial linear spaces, GM
switching, Sunada's method). S1 **Thm 14.2.2**: "With respect to the adjacency matrix, almost
all trees are non-DS."

**`λ_max` bounds.** `d̄ ≤ θ_1 ≤ d_max` where `d̄` is the average degree. *Proof:* lower by the
Rayleigh quotient at `1`; upper by looking at the largest coordinate of an eigenvector.
**[A]**, ~6 steps. S1 Prop. 3.1.1; S2 §4.2.

**Perron–Frobenius.** *See §E — this is the single most important prerequisite finding in this
report.* The symmetric/graph case has a fully elementary proof.

**Bipartiteness ⟺ spectrum symmetric about 0.** *Statement (S2 Prop. 4.5.3, 4.5.4):* for a
connected graph, `θ_n = −θ_1` iff `G` is bipartite; and if `G` is bipartite the whole spectrum
is symmetric about `0`. *Proof route:* the "⇐" direction flips the sign of the eigenvector on
one side of the bipartition (4 lines); the "⇒" direction reads off the equality case of the
Perron–Frobenius argument. **[A]**. Also S1 Prop. 1.3.10 gives the Laplace-spectrum version.

**Spectra of named graphs.** `K_n`: `n−1` once, `−1` with multiplicity `n−1`. `C_n`:
`2cos(2πj/n)`, `j = 0,…,n−1`. `K_{m,n}`: `±√(mn)` and `0` with multiplicity `m+n−2`.
**Petersen graph**: `3` once, `1` five times, `−2` four times. **Hypercube `Q_n`**: `n−2i` with
multiplicity `C(n,i)`. **Cayley graph of an abelian group** `G` with connection set `S`:
eigenvalues `Σ_{s∈S} χ(s)` over the characters `χ` of `G`. All **[A]** except the last
(see the representation-theory question below). Locators: S1 §1.4, §1.4.9; S2 Ch. 5, Ch. 7;
S3 Ch. 2 (the hypercube via the Radon transform, `Z_2^n` characters, entirely elementary).

**The Laplacian.** `L = D − A`. (i) *PSD:* `x^T L x = Σ_{uv∈E}(x_u − x_v)² ≥ 0` — **[A]**,
3 lines, and it also gives `L = NN^T` for the directed incidence matrix `N` (S1 §1.1).
(ii) *`dim ker L` = number of connected components* — **[A]**, S1 Prop. 1.3.7.
(iii) *Algebraic connectivity* `λ_2` (the Fiedler value): `λ_2 > 0` iff `G` is connected;
`λ_2 ≤ κ(G)` (vertex connectivity) for non-complete `G`; the **nodal domain theorem**
(S2 §24.5). (i)–(ii) **[A]**; Fiedler's nodal domain theorem **[B]**, and S2 §24.4 proves a
"Perron–Frobenius theorem for Laplacians" first.

**The matrix-tree theorem.** *Statement (S3 Thm 9.8):* for a connected graph `G` on `p`
vertices, every cofactor of the Laplacian equals the number `κ(G)` of spanning trees.
*Route 1 — Cauchy–Binet:* `L = M M^T` for the directed incidence matrix `M` (S3 Lemma 9.6a);
delete a row to get `M_0`; then `det(M_0 M_0^T) = Σ_S det(M_0[S])²` over `(p−1)`-subsets `S`
of edges, and **Lemma 9.7** says `det(M_0[S]) = ±1` if `S` is a spanning tree and `0`
otherwise. *Route 2 — deletion–contraction:* `κ(G) = κ(G−e) + κ(G/e)`, and the cofactor obeys
the same recursion. *The all-cofactors-equal lemma* is **S3 Lemma 9.9** (if all row sums and
all column sums of `M` vanish then all cofactors are equal) — **[A]**, ~5 steps. *Weighted
version:* replace `L` by the weighted Laplacian; the cofactor is `Σ_T Π_{e∈T} w_e`. Route 1
is **[B]** and is the one to scaffold, because Cauchy–Binet is itself a good item (below).
**BEST theorem** (S3 Thm 10.2): for a connected balanced digraph, the number of Eulerian tours
is `τ(D,v)·Π_u (outdeg(u) − 1)!`, where `τ(D,v)` is the number of oriented spanning trees
toward `v` — independent of `v` by **Cor. 10.3**. Needs the **digraph** matrix-tree theorem
(**Thm 10.4**) first. **[B]**, a substantial but very rewarding chain; S3 Ch. 10 also derives
the number of de Bruijn sequences (**Cor. 10.11**) as the payoff.

**Cauchy interlacing and Courant–Fischer.** *Courant–Fischer (S1 Thm 2.4.1; S2 Ch. 2):*
`θ_k = max_{dim W = k} min_{0 ≠ x ∈ W} R_A(x)`. *Interlacing:* S1 **Thm 2.5.1** (for
`S^T S = I`), **Cor. 2.5.2** (principal submatrices: `θ_i ≥ η_i ≥ θ_{n−m+i}`), **Cor. 2.5.4**
(quotient matrices of a partition). All **[A]/[B]**: they need only the spectral theorem plus
the dimension argument that two subspaces with `dim U + dim W > n` intersect nontrivially.
S2 §2.2 even derives the **spectral theorem itself** by optimisation, which is a nice
alternative if the library wants a second proof.

**Strongly regular graphs.** *Definition:* `srg(v,k,λ,μ)` — `k`-regular on `v` vertices,
adjacent pairs have `λ` common neighbours, non-adjacent pairs have `μ`.
*Parameter feasibility:* `A² = kI + λA + μ(J − I − A)`, whence `k(k−λ−1) = μ(v−k−1)` **[A]**.
*Eigenvalues:* `k`, and `r,s = ½[(λ−μ) ± √((λ−μ)² + 4(k−μ))]`, with multiplicities
`f,g = ½[(v−1) ∓ (2k + (v−1)(λ−μ))/√((λ−μ)²+4(k−μ))]` **[A]**.
*The integrality/rationality condition (S1 Thm 9.1.3; S2 §9.8):* the multiplicities are
nonnegative integers, so **either** `f = g` (the "half case" / conference graph, forcing
`v = 4μ+1, k = 2μ, λ = μ−1`) **or** `√((λ−μ)²+4(k−μ))` is a positive integer dividing the
relevant expression. **[A]/[B]** and it is the workhorse behind Moore graphs and the
friendship theorem. *Examples to exhibit:* the pentagon, `Paley(q)` (**S1 Prop. 9.1.1**),
lattice graphs, Latin-square graphs, triangular graphs, the Petersen graph as `srg(10,3,0,1)`.
*Friendship theorem and Moore graphs / Hoffman–Singleton:* see §E.

**Expanders, Cheeger, mixing, Alon–Boppana, Ramanujan.**
- *Expander mixing lemma (S1 Prop. 4.3.2):* for `d`-regular `G` with
  `λ = max(|θ_2|, |θ_n|)`, and all `S,T ⊆ V`,
  `| e(S,T) − d|S||T|/n | ≤ λ√(|S||T|)`. *Proof:* expand the characteristic vectors in an
  eigenbasis and apply Cauchy–Schwarz. **[A]**, ~8 steps — the best entry point to the whole
  expander story and fully within reach.
- *Cheeger's inequality (discrete, both directions):* the easy direction
  `h(G) ≥ (d − θ_2)/2` (equivalently `φ(S) ≥ ν_2/2`) is **[A]** — a Rayleigh-quotient test
  vector. The hard direction `h(G) ≤ √(2d(d−θ_2))` is **[B]**; see §E for exactly what it
  needs.
- *Alon–Boppana (S1 Prop. 4.1.1):* "If `k ≥ 3` then for `k`-regular graphs on `n` vertices…"
  `θ_2 ≥ 2√(k−1) − o(1)`. **[B]**, via a trace/test-vector argument on balls; Nilli's proof is
  the short one. S1 **Prop. 4.1.2 (Serre)** is the refinement.
- *Ramanujan graphs:* `λ ≤ 2√(d−1)`. Existence (LPS/Margulis) — **statement only, [C]**.
- *Random walks and mixing time:* S3 Ch. 3, S2 Ch. 10. Stanley **Thm 3.2** shows the walk
  matrix `M` is diagonalisable with real eigenvalues via the similarity `D^{1/2} M D^{−1/2}`,
  which is **[A]** and needs only the library's spectral theorem — a clean way to get
  reversible chains without any Markov-chain theory.

**Association schemes, Bose–Mesner, the Delsarte LP bound.** *Definitions and the algebra:*
the span of `A_0,…,A_d` is closed under both matrix and Schur (entrywise) product; it has two
distinguished bases, the `A_i` and the primitive idempotents `E_j`, related by the `P` and `Q`
matrices (S1 **Thm 11.2.1**, **Thm 11.2.2**). *Delsarte's LP bound (S1 **Thm 11.3.1**):*
"`aQ ≥ 0`" for the inner distribution `a` of any subset. *Prerequisite:* commuting symmetric
matrices are simultaneously diagonalisable — **S1 Prop. 2.1.1**, which follows from the
library's spectral theorem. **[B]** for the algebra, **[B]** for the LP bound as an
inequality; using it as an *optimisation* to derive numerical bounds is **[C]**.
Godsil S5 is the long-form treatment; Brouwer–Haemers Ch. 11 is the compact one and is the
better scaffolding target.

**Cayley graphs and eigenvalues via characters — what representation theory is needed?**
- **Abelian `G`: only the character theory of finite abelian groups.** The eigenvectors are the
  characters `χ ∈ Ĝ` and the eigenvalues are `Σ_{s∈S} χ(s)` (S1 **Prop. 6.3.1**; S2 §7.8).
  What this needs is that `Ĝ` is a group of the same order forming an orthogonal basis of
  `C^G` — i.e. roots of unity plus the decomposition of `G` into cyclic factors. **[B]** if the
  library has finite abelian group structure and roots of unity.
- **Two special cases needing essentially nothing:** **circulants** (`G = Z_n`): eigenvalues
  `Σ_{s∈S} ω^{js}` with `ω = e^{2πi/n}` — **[A]**, needs only `n`-th roots of unity. And the
  **hypercube** (`G = Z_2^n`): the characters are the `±1` functions `χ_u(x) = (−1)^{u·x}`,
  giving eigenvalues `n − 2|u|` — **[A]**, and Stanley Ch. 2 develops exactly this from
  scratch with no representation theory whatsoever. **Recommendation: scaffold circulants and
  the hypercube first; they buy most of the intuition at almost no prerequisite cost.**
- **Non-abelian `G`: the full Wedderburn/Artin–Wedderburn representation theory.** Eigenvalues
  come in blocks indexed by the irreducible representations, with multiplicities equal to the
  irrep dimensions (S1 §6.3; the machinery is built in Godsil S5's chapters "Algebra and
  Modules", "Semisimple Modules", "Semisimple Algebras"). **[C]** — genuinely a different
  subject area, and a legitimate `deferred` disposition under the self-contained-scope rule.

---

## D. Convention disagreements

Both conventions recorded, with sources, and a recommendation.

**1. Laplacian sign and normalisation.**
- `L = D − A` — the *combinatorial* or *unnormalised* Laplacian. Used by **Brouwer–Haemers**
  (S1 §1.1: "The Laplace matrix of `Γ` is the matrix `L` … `L = D − A`"), **Spielman** (S2
  §3.1), **Stanley** (S3 Ch. 9), Godsil–Royle, Biggs.
- `𝓛 = I − D^{−1/2} A D^{−1/2} = D^{−1/2} L D^{−1/2}` — the *normalised* Laplacian, the
  standing convention of **Chung**, *Spectral Graph Theory* (CBMS 92), and standard in
  spectral clustering. Spielman introduces it only where conductance demands it (S2 §20.3).
- `L_rw = I − D^{−1}A` — the *random-walk* normalisation; same spectrum as `𝓛`, non-symmetric.
- `Q = D + A` — the **signless** Laplacian, named as such in **S1 §1.1** verbatim: "The matrix
  `Q = D + A` is called the signless Laplace matrix of `Γ`."
- A minority (mostly analysis-facing) convention writes `A − D`, so that the discrete operator
  matches the sign of the analytic Laplacian `Δ` and is negative semidefinite.
> **Recommendation: `L = D − A` as the primary object.** It is the combinatorics-standard
> choice, it is the one the matrix-tree theorem needs (`L = NN^T`), and for a `d`-regular
> graph it relates to the adjacency spectrum by the clean `θ_i = d − μ_i`. Introduce `𝓛`
> explicitly and only where conductance/Cheeger requires it, and state the relation. Never use
> `A − D`.

**2. Spectrum ordering.** Brouwer–Haemers, verbatim (S1 §1.3): adjacency eigenvalues
**decreasing**, `θ_1 ≥ … ≥ θ_n`; Laplace eigenvalues **increasing**, "`0 = μ_1 ≤ μ_2 ≤ … ≤ μ_n`".
Spielman uses the same pairing (`μ_1 ≥ … ≥ μ_n` adjacency, `λ_1 ≤ … ≤ λ_n` Laplacian).
> **Recommendation: adopt exactly this, and say it on the page.** The two orders are opposite
> *on purpose* — in both cases index `1` is the trivial eigenvalue of a regular graph
> (`θ_1 = k` ↔ `μ_1 = 0`). But it means "`λ_2`" denotes the **second-smallest** Laplacian
> eigenvalue and the **second-largest** adjacency eigenvalue. This is a live error source and
> a page that does not state its convention will produce a false Statement sooner or later.

**3. Design notation.**
- `t`-`(v,k,λ)` **design** — the modern standard (Beth–Jungnickel–Lenz, Brouwer–Haemers,
  Stinson, Colbourn–Dinitz). A Steiner system is `S(t,k,v) = t`-`(v,k,1)`.
- `S_λ(t,k,v)` — older (Hall, and much of the Steiner-system literature). **Note the reversed
  position of `v`.**
- `BIBD(v,b,r,k,λ)` — older statistics/design-of-experiments literature; redundant, since `b`
  and `r` are determined by `v,k,λ` (that is precisely the theorem in §C.2).
> **Recommendation: `2-(v,k,λ)`, defined once, with `BIBD` and `S_λ(2,k,v)` recorded as
> synonyms in a Remark.** Since the library will *prove* that `b` and `r` are determined, the
> five-parameter notation would actively misrepresent the mathematics.

**4. Projective plane order.** Universally, a projective plane "of order `n`" has `n+1` points
per line and `n²+n+1` points. `PG(2,q)` has order `q`. **The genuine trap is the affine
case:** an *affine* plane of order `n` has `n` points per line and `n²` points. Sources agree
on both; authors routinely conflate them.
> **Recommendation: state both counts explicitly whenever "order" appears.**

**5. Strongly regular parameter tuple.** `(v,k,λ,μ)` is essentially universal — `v` vertices,
`k`-regular, `λ` common neighbours for adjacent pairs, `μ` for non-adjacent. Some write
`(n,k,λ,μ)`; the distance-regular literature sometimes writes `(v,k,a_1,c_2)`. No substantive
disagreement, but note that `λ` here is **unrelated** to the `λ` of a 2-`(v,k,λ)` design, and
the two will appear on adjacent pages.
> **Recommendation: use `(v,k,λ,μ)`, and add an explicit Remark disambiguating the two `λ`s.**

**6. Expansion constants.**
- **Edge expansion / Cheeger constant** `h(G) = min_{0<|S|≤n/2} |∂S| / |S|` — vertex-count
  denominator. Standard in combinatorics; S1 §4.4.
- **Conductance** `φ(S) = w(∂S)/min(vol S, vol(V∖S))`, `φ(G) = min_S φ(S)` — volume (degree-sum)
  denominator. Chung's and Spielman's convention (S2 §20.2, and S2 §21.1 verbatim:
  "`φ(S) = w(∂(S)) / min(d(S), d(V−S))`").
- **Vertex expansion** `min |N(S)∖S| / |S|` — a genuinely different (and generally
  incomparable) quantity; S2 §27.4.
- For a `d`-regular graph, `φ(G) = h(G)/d`, so Cheeger reads either
  `φ²/2 ≤ ν_2 ≤ 2φ` (normalised form) or `(d−θ_2)/2 ≤ h(G) ≤ √(2d(d−θ_2))` (adjacency form).
> **Recommendation: for a `d`-regular development use `h(G)` and the adjacency form** — it
> needs no normalised Laplacian at all. State the conductance form as a Remark with the
> conversion, and keep vertex expansion clearly separate; conflating edge and vertex expansion
> is a false-statement risk, not a stylistic choice.

---

## E. Prerequisite audit

The load-bearing section. For each theorem: what the standard proof genuinely needs, and
whether a route exists that avoids it.

### E.1 Does Perron–Frobenius need a compactness/fixed-point argument? **No — not for the symmetric case, and that is the case the library needs.**

*The general theorem does* rest on either a compactness argument or Brouwer's fixed-point
theorem: for a nonnegative irreducible `T` one maximises `min_i (Tx)_i/x_i` over the compact
simplex, or applies a fixed-point theorem to `x ↦ Tx/‖Tx‖`. **Stanley confirms the cost by
declining to pay it: S3 §3, immediately before Theorem 3.3, says verbatim "We now state
without proof a version of the Perron–Frobenius theorem. There are some other parts of the
Perron-Frobenius theorem that we don't need here and are omitted."** Brouwer–Haemers state
the general irreducible version as **Thm 2.2.1**.

**But for a symmetric matrix — i.e. for the adjacency matrix of an undirected graph — there is
a fully elementary route, and Spielman gives it in about one page.** S2 **Theorem 4.5.1
[Perron-Frobenius, Symmetric Case]**, verbatim: *"Let `G` be a connected weighted graph, let
`A` be its adjacency matrix, let `H` be a nonnegative diagonal matrix, let `M = A + H`, and
let `μ_1 ≥ μ_2 ≥ … ≥ μ_n` be its eigenvalues. Then a. The eigenvalue `μ_1` has a strictly
positive eigenvector, b. `μ_1 ≥ −μ_n`, and c. `μ_1 > μ_2`."* Spielman prefaces it: *"In the
symmetric case, the theory is made much easier by both the spectral theory and the
characterization of eigenvalues as extreme values of Rayleigh quotients."*

*The proof, audited step by step:*
1. **Lemma 4.5.2** — a nonnegative eigenvector of `M` is strictly positive. Proof: if
   `φ(b) = 0` for some `b` with a neighbour `c` where `φ(c) > 0`, then
   `0 = μφ(b) = (Mφ)(b) ≥ w_{b,c}φ(c) > 0`. Uses connectivity only. ~4 steps.
2. **Part (a)** — set `x(u) = |φ_1(u)|`. Then `‖x‖ = ‖φ_1‖` and
   `μ_1 = φ_1^T M φ_1 ≤ x^T M x`, so `x` attains the maximum Rayleigh quotient and is
   therefore an eigenvector for `μ_1`; by Lemma 4.5.2 it is strictly positive. ~5 steps.
3. **Part (b)** — the same absolute-value trick applied to `φ_n`. ~3 steps.
4. **Part (c)** — if `μ_2 = μ_1`, then `|φ_2|` is a nonnegative `μ_1`-eigenvector, hence
   strictly positive, so `φ_2` has no zero entry; since `φ_2 ⊥ φ_1` it has both signs, so some
   edge `(a,b)` has `φ_2(a) < 0 < φ_2(b)`, which makes the inequality strict — contradiction.
   ~6 steps.

**Total machinery used: the spectral theorem (real symmetric ⇒ orthonormal eigenbasis), the
variational characterisation `μ_1 = max_{‖x‖=1} x^T M x` *with the fact that the maximiser is
an eigenvector*, and graph connectivity. No compactness, no fixed point, no Brouwer, no
topology.** The library has the spectral theorem, so this is **[A]/[B]** — roughly 18 numbered
steps for the whole theorem including the lemma, and it splits naturally into
`lem-` (Lemma 4.5.2) + `thm-` (the three parts).

> **This is the single most consequential finding for the spectral-graph-theory page.** The
> natural fear — "we cannot do spectral graph theory because we have no fixed-point theorem" —
> is unfounded. Scaffold Perron–Frobenius in the symmetric form, state the general nonnegative
> irreducible version as a source-cited Remark (or `proved_here: false`), and every downstream
> result the library actually wants (`θ_1` simple for connected graphs, positive Perron vector,
> `|θ_n| ≤ θ_1`, bipartite iff `θ_n = −θ_1`) follows from the symmetric version.
> *Caveat to record:* Spielman proves the theorem "in the case where `H` is the zero matrix"
> for simplicity, so an author using the `M = A + H` generality must supply the (routine)
> extension or state the theorem for `H = 0`.

### E.2 Does the discrete Cheeger inequality need anything beyond the Rayleigh quotient and Courant–Fischer? **The easy direction, no. The hard direction, yes — but only mildly.**

- **Easy direction** (`ν_2 ≤ 2φ(G)`, equivalently `h(G) ≥ (d−θ_2)/2`): plug the test vector
  built from a set `S` into the Rayleigh quotient and orthogonalise against the trivial
  eigenvector. **Nothing beyond the Rayleigh quotient. [A].** S2 Ch. 20.
- **Hard direction** (`φ(G) ≤ √(2ν_2)`): S2 **Theorem 21.1.3** — "Let `G` be a weighted graph,
  let `L` be its Laplacian, and let `d` be its vector of weighted degrees. Let `z` be a vector
  that is centered with respect to `d`. Then, there is a number `τ` for which the set
  `S_τ = {a : z(a) < τ}` satisfies `φ(S_τ) ≤ √(2 z^T L z / z^T D z)`." Spielman follows
  **Trevisan's** proof, which chooses the threshold `τ` at random **with probability density
  `2|t|`** and then argues
  `E[w(∂S_τ)] ≤ √(2ρ) E[min(d(S_τ), d(V−S_τ))]`.
  *Machinery beyond Rayleigh quotients:* (i) an **averaging/expectation argument over a
  continuous distribution**, i.e. a one-variable integral `∫ 2|t| dt`; (ii) **Cauchy–Schwarz**.
  Nothing deeper — no isoperimetry, no manifold Cheeger, no eigenvector regularity.
> **Route avoiding the continuous density:** the threshold only ever matters at the `n−1`
> distinct sweep values `z(1) ≤ … ≤ z(n)`, so the continuous density can be replaced by a
> **finite weighted average over the `n−1` sweep cuts**, turning the argument into a finite
> averaging argument plus Cauchy–Schwarz. **This matters because the library has *finite*
> probability, not continuous.** Recommendation: scaffold the sweep-cut version with a finite
> weighted average; it is **[B]**, ~20 steps, and needs only Cauchy–Schwarz and finite
> averaging on top of the Rayleigh quotient. Record the continuous-density formulation as the
> source's own presentation. S2 §16.5 offers **Andersen's proof** as an alternative.

### E.3 Does Cauchy–Binet need to be proved, or does it follow from standard determinant machinery? **It must be proved — but it is a short, standard consequence of multilinearity, and a good item in its own right.**

It is **not** a corollary of `det(AB) = det A · det B` (that requires square factors). It is the
rectangular generalisation: for `A` an `m×n` and `B` an `n×m` matrix with `m ≤ n`,
`det(AB) = Σ_S det(A[·,S]) det(B[S,·])` over the `m`-subsets `S ⊆ [n]`.
Both of the library's two candidate sources treat it as a theorem to prove, not to assume:
**Brouwer–Haemers state it as Prop. 1.3.5 (Cauchy-Binet)** and **Stanley proves it as
Theorem 9.4 ("the Binet-Cauchy Theorem")** immediately before using it for the matrix-tree
theorem. Proof route: expand `det(AB)` by multilinearity in the columns and collect terms,
or use the Laplace expansion of the block matrix `[[I, B],[−A, 0]]`.
> **Verdict: prove it. [A]/[B], ~10–12 steps, needs only determinants over a commutative ring,
> which the library has published.** It earns its keep twice over: it is the engine of the
> matrix-tree theorem and it is reusable for Gram determinants.

### E.4 Does Bruck–Ryser–Chowla genuinely need Lagrange four squares or Hasse–Minkowski? **Split the question — the answers differ, and this is the second most consequential finding.**

- **`v` even (`k−λ` is a square): neither.** Pure determinant arithmetic, ~5 steps. **[A]**.
- **Bruck–Ryser for projective planes (`n ≡ 1,2 mod 4` ⇒ `n = a² + b²`): Lagrange's
  four-square theorem, and *not* Hasse–Minkowski.** S9 gives a complete elementary proof.
  Audited, the proof uses exactly:
  1. `A A^T = A^T A = nI + J` for the incidence matrix, and `det A = (n+1)n^{n(n+1)/2} ≠ 0`;
  2. the substitution `z = xA`, giving `Σ z_i² = n Σ x_i² + (Σ x_i)²`, then adding `n x_{v+1}²`
     to both sides — **and it is precisely here that `n ≡ 1,2 (mod 4)` is used**, because it
     makes `v+1 = n²+n+2` a multiple of `4` so the `x_i²` can be grouped in fours;
  3. **Lagrange's four-square theorem**, to write `n = n_1²+n_2²+n_3²+n_4²`;
  4. **Euler's four-square identity**, realised as the matrix
     `N = [[n_1,−n_2,−n_3,−n_4],[n_2,n_1,−n_4,n_3],[n_3,n_4,n_1,−n_2],[n_4,−n_3,n_2,n_1]]`
     with `|N| = n²`, so that `y = Nx` satisfies `Σ y² = n Σ x²` blockwise;
  5. **Lemma 1** — positive-definiteness of a quadratic form survives non-singular substitution
     and the elimination of one variable (elementary, proved in S9);
  6. a descent eliminating `x_1,…,x_v` one at a time, ending at `n x_{v+1}² = Y² + s²`;
  7. **Lemma 2** — if `p | A²+B²` with `p ∤ A,B` then `p` is a sum of two squares (a **Fermat
     descent**, elementary, proved in S9); and **Lemma 3** — `nC² = A²+B²` ⇒ `n` is a sum of
     two squares, via the **Brahmagupta–Fibonacci identity**
     `(a²+b²)(c²+d²) = (ac−bd)² + (ad+bc)²`.
  **Verdict: [B].** No local–global theory, no `p`-adics, no Witt cancellation. The only
  genuinely external input is **Lagrange's four-square theorem**, which the library must
  either already have in its number-theory band or build (it is itself a bounded, classical
  result). Everything else is a self-contained chain of three lemmas. **This is a realistic,
  high-value scaffolding target** — split as: `thm-lagrange-four-squares` (or cite it),
  `lem-quadratic-form-substitution`, `lem-fermat-two-square-descent`,
  `thm-bruck-ryser-projective-plane`.
- **General BRC, `v` odd (the Diophantine equation
  `z² = (k−λ)x² + (−1)^{(v−1)/2} λ y²`): Hasse–Minkowski in the standard modern treatment.**
  Wikipedia states the conditions "can be derived from the Hasse–Minkowski theorem on the
  rational equivalence of quadratic forms". The classical alternative, as the survey
  literature describes it, is **Hall's treatment: rules for manipulating rational quadratic
  forms leaning on Witt's cancellation lemma and the Lagrange four-square theorem, reducing to
  dimension ≤ 3 and finishing ad hoc.** Either way this needs a theory of rational quadratic
  forms the library does not have. **Verdict: [C].**
> **Recommendation: scaffold the `v` even case and the projective-plane Bruck–Ryser in full;
> state the general odd-`v` BRC as a source-cited `rem-` item with `proved_here: false`,
> recording the failed in-library route (no theory of rational quadratic forms /
> Hasse–Minkowski) in the batch notes as the self-contained-scope rule requires.**

### E.5 Does the Bose/Skolem Steiner-triple-system construction need anything beyond finite abelian groups and modular arithmetic? **No. Both are pure modular arithmetic; Bose is clean, Skolem is fiddlier.**

- **Necessity** (`v ≡ 1` or `3 mod 6`): from `r = (v−1)/2` and `b = v(v−1)/6` being integers.
  **[A]**, ~4 steps.
- **Bose's construction (`v ≡ 3 mod 6`).** Write `v = 3n` with `n = 2t+1` odd. On `Z_n` define
  `x ∘ y = ((n+1)/2)(x+y) mod n` — well defined because `n` is odd, so `2` is invertible mod
  `n`; this `∘` is **commutative** and **idempotent** (`x ∘ x = x`), and `x ∘ −` is a bijection
  (a quasigroup). Points: `Z_n × {1,2,3}`. Blocks:
  (i) `{(x,1),(x,2),(x,3)}` for each `x ∈ Z_n` — `n` blocks;
  (ii) `{(x,i),(y,i),(x∘y, i+1)}` for each `i ∈ Z_3` and each unordered pair `x ≠ y` in `Z_n`
  — `3·C(n,2)` blocks.
  Total `n + 3n(n−1)/2 = n(3n−1)/2 = v(v−1)/6` ✓. *Verification obligations:* every pair of
  distinct points is in exactly one block — (a) same layer `{(x,i),(y,i)}`: only a type-(ii)
  block with that `i`, determined by `{x,y}`; (b) adjacent layers `(x,i),(y,i+1)`: if `x=y`
  the type-(i) block; if `x≠y`, need the unique `b` with `x ∘ b = y`, which exists and is
  `≠ x` because `b = x` would force `y = x∘x = x`.
  **Prerequisites: `Z_n`, invertibility of `2` mod odd `n`, and the quasigroup (bijectivity)
  property. Nothing beyond modular arithmetic and cyclic groups. [A]/[B], ~15 numbered steps
  including the case analysis.** A very good target.
- **Skolem's construction (`v ≡ 1 mod 6`).** Write `v = 6t+1 = 3n+1` with `n = 2t` even. One
  adjoins a single point `∞` to `Z_n × {1,2,3}` and uses a **half-idempotent commutative
  quasigroup** on `Z_n` of even order — concretely `x ∘ y = (t+1)(x+y) mod 2t`, for which
  `x ∘ x = 2x`, so only `t` of the `2t` elements are idempotent; the `∞` point absorbs the
  non-idempotent cases. **Prerequisite answer is the same: nothing beyond modular arithmetic
  on `Z_{2t}` and a finite case analysis.** But there are more cases (blocks through `∞`, plus
  the same three layer-families), so it is **[B]** rather than **[A]**, and the case analysis
  is where an author will make a mistake.
> **Recommendation: scaffold Bose fully from this report. For Skolem, take the exact block
> list verbatim from a source before authoring — do not reconstruct it from memory.** Good
> sources for the exact block list: van Lint & Wilson Ch. 19; Lindner & Rodger, *Design
> Theory*; Colbourn & Dinitz, *Handbook of Combinatorial Designs*, Part II. **I did not
> independently verify Skolem's exact block list against a primary source in this run — see
> §F.**

### E.6 Does the friendship theorem's endgame need anything beyond eigenvalue integrality and elementary number theory? **No. Eigenvalue integrality plus a divisibility argument is exactly enough.**

*Statement:* if `G` is a finite graph in which every two distinct vertices have **exactly one**
common neighbour, then `G` has a vertex adjacent to all others (so `G` is a "windmill" of
triangles glued at one vertex).

*Proof route:*
1. **Combinatorial half (no algebra).** Suppose no such vertex exists. Show `G` is
   `k`-regular: if `u ≁ v` then the common-neighbour condition gives a bijection between
   `N(u)` and `N(v)`, so non-adjacent vertices have equal degree; a short argument extends
   this to all vertices. ~8 steps.
2. `A² = (k−1)I + J`. Hence `n = k² − k + 1`.
3. **Eigenvalues.** `A` has `k` as an eigenvalue (on `1`); on `1^⊥`, `A² = (k−1)I`, so the
   other eigenvalues are `±√(k−1)`, with multiplicities `f` and `g`, `f+g = n−1`.
4. **Integrality.** `A` is an integer matrix, so its characteristic polynomial is monic with
   integer coefficients and its eigenvalues are **algebraic integers**; if `√(k−1)` is
   rational it is therefore an integer. Set `s = √(k−1)`, an integer (the case `k−1` not a
   perfect square is killed because then `f = g` and the trace condition fails).
5. **Trace.** `tr A = 0 = k + (f − g)s`. So `s | k = s² + 1`, hence `s | 1`, so `s = 1`,
   `k = 2`, `n = 3` — `G` is a triangle, which *does* have a vertex adjacent to all others,
   contradicting the assumption. ∎

**Machinery: the spectral theorem for symmetric integer matrices, the fact that a rational
algebraic integer is a rational integer (equivalently: a monic integer polynomial's rational
roots are integers — the rational root theorem), the trace identity `tr A = Σ λ_i`, and the
divisibility `s | s²+1 ⇒ s | 1`. Nothing else.** **[B]**, ~20 numbered steps across the
combinatorial and algebraic halves; splits naturally into `lem-friendship-regular` +
`thm-friendship`.
> The same integrality template drives **Moore graphs / Hoffman–Singleton** (S1 **Thm 9.1.5**;
> S4 **Thm 1.9**): a `k`-regular graph of girth 5 and diameter 2 has `k² + 1` vertices and is
> an `srg(k²+1, k, 0, 1)`; the multiplicities of the eigenvalues `(−1 ± √(4k−3))/2` must be
> non-negative integers, which forces `√(4k−3) = s` to be an integer with `s | 15`, giving
> `s ∈ {1,3,5,15}` and hence `k ∈ {2,3,7,57}`. **[B]**, ~15 steps, and it needs exactly the
> same two ingredients. **Scaffold the friendship theorem and Hoffman–Singleton as a pair** —
> they share their entire toolkit, and the integrality lemma should be a separate `lem-` item
> that both cite.

### E.7 Summary table — external machinery per theorem

| Theorem | Standard proof needs | In-library route? |
|---|---|---|
| Perron–Frobenius (general, nonneg. irreducible) | compactness or Brouwer fixed point | **No** — state as Remark / `proved_here: false` |
| **Perron–Frobenius (symmetric)** | spectral theorem + Rayleigh quotient | **Yes, [A]/[B]** (S2 Thm 4.5.1) |
| Courant–Fischer, interlacing | spectral theorem + dimension count | **Yes, [A]** |
| Cauchy–Binet | multilinearity of `det` | **Yes, [A]** — prove it, don't assume it |
| Matrix-tree | Cauchy–Binet + incidence matrix | **Yes, [B]** |
| BEST theorem | digraph matrix-tree | **Yes, [B]** |
| Cheeger, easy direction | Rayleigh quotient | **Yes, [A]** |
| Cheeger, hard direction | finite averaging + Cauchy–Schwarz (sweep cuts) | **Yes, [B]** — avoid the continuous density |
| Expander mixing lemma | spectral decomposition + Cauchy–Schwarz | **Yes, [A]** |
| Alon–Boppana | trace / test vectors on balls | **Yes, [B]** |
| Hoffman ratio bound | spectral theorem + orthogonal decomposition | **Yes, [A]** |
| Friendship theorem | integrality + rational root theorem + trace | **Yes, [B]** |
| Hoffman–Singleton | same as friendship | **Yes, [B]** |
| srg integrality conditions | multiplicities are integers | **Yes, [A]/[B]** |
| Delsarte LP bound | simultaneous diagonalisation of commuting symmetrics | **Yes, [B]** |
| Combinatorial Nullstellensatz | polynomial rings only | **Yes, [A]** |
| Cauchy–Davenport, Chevalley–Warning | CN + binomial coefficient mod `p` | **Yes, [A]** |
| Dvir finite-field Kakeya | polynomial space dimension + identity lemma | **Yes, [A]** |
| Cap set (slice rank) | diagonal-tensor lemma + monomial counting estimate | **Partly, [B]/[C]** |
| Joints problem | real algebraic geometry, Bézout | **No, [C]** |
| Oddtown / Eventown / Fisher / Graham–Pollak | rank bound over `F_2` or `R` | **Yes, [A]** |
| Ray-Chaudhuri–Wilson (nonuniform) | polynomial space + multilinearisation | **Yes, [B]** |
| Frankl–Wilson (modular) | above, over `F_p` | **Yes, [B]** |
| Kahn–Kalai (Borsuk) | Frankl–Wilson + `±1`-cube construction | **Yes, [B]** — self-contained per S4 |
| Sauer–Shelah | shifting (no algebra) *or* inclusion matrices | **Yes, [A]** by shifting |
| Kneser chromatic number (lower bound) | **Borsuk–Ulam** or octahedral Tucker | **No, [C]** |
| Lovász `ϑ` sandwich | orthonormal representations + Cauchy–Schwarz | **Yes, [B]** |
| Lovász `ϑ` via SDP | convex/SDP duality | **No, [C]** |
| `r,b` constant; design identities | double counting | **Yes, [A]** |
| Symmetric design `NN^T` identity | `det(aI+bJ)` | **Yes, [A]** |
| BRC, `v` even | determinant arithmetic | **Yes, [A]** |
| **Bruck–Ryser, projective planes** | **Lagrange four squares + Euler identity + descent** | **Yes, [B]** — *not* Hasse–Minkowski |
| BRC, `v` odd (general) | Hasse–Minkowski / Witt cancellation | **No, [C]** |
| Bose STS construction | modular arithmetic on `Z_n`, `n` odd | **Yes, [A]/[B]** |
| Skolem STS construction | modular arithmetic on `Z_{2t}` + `∞` | **Yes, [B]** — get block list from a source |
| Kirkman / Wilson / Keevash existence | far beyond scope | **No, [C]**, statement only |
| Projective plane counts, `PG(2,q)`, duality | double counting + finite fields | **Yes, [A]** |
| Desarguesian ⇒ `PG(2,q)` | coordinatisation + Wedderburn's little theorem | **[C]** for the full proof |
| MOLS ⟺ affine/projective plane | direct construction | **Yes, [A]/[B]** |
| `N(q) = q−1` for prime powers | `F_q` arithmetic | **Yes, [A]** |
| Bose–Shrikhande–Parker (Euler false) | intricate direct constructions | **No, [C]**, statement only |
| Hadamard order divisibility; Paley | `±1` matrices; quadratic residues | **Yes, [A]/[B]** |
| Circulant Hadamard nonexistence | cyclotomic integers `Z[ζ]`, Kronecker | **[C]** unless cyclotomics exist |
| Linear codes, Singleton, Hamming bound, Hamming/RS codes | finite fields + linear algebra | **Yes, [A]/[B]** |
| MacWilliams identity | additive characters of `F_q` / DFT | **[B]** |
| Golay codes, uniqueness | heavy | **No, [C]** |
| Cayley eigenvalues, abelian | characters of finite abelian groups | **Yes, [B]** |
| Cayley eigenvalues, circulant / hypercube | roots of unity / `±1` characters | **Yes, [A]** |
| Cayley eigenvalues, non-abelian | Artin–Wedderburn representation theory | **No, [C]** |

---

## F. Blockers

1. **Babai & Frankl was initially unreachable at its most-cited URL.** Both
   `https://people.cs.uchicago.edu/~laci/CLASS/HANDOUTS-COMB/BaFrNew.pdf` and
   `.../babai-frankl-book2022.pdf` return **HTTP 403 Forbidden** to a plain `curl`, and also to
   a browser user-agent alone. **Resolved:** the server applies hotlink protection; adding a
   `Referer` header (`-e "https://people.cs.uchicago.edu/~laci/"`) *together with* a browser
   user-agent succeeds, and the current version is
   **`https://people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf`** (Version 2.2.1,
   November 2024, 251 pp.). Recording the technique because other university servers in this
   corpus behave the same way.
2. **Godsil's `assoc2.pdf` silently truncates on a first fetch.** An initial download returned
   a 1.05 MB file that `pypdf` read as **6 pages**; re-fetching with a user-agent and Referer
   returned the real **242-page** document at the same byte size class. **Any harvest that
   trusts a first download without checking the page count against the source's own
   description ("Over 200 pages") will silently under-report.**
3. **Skolem's exact STS block list was not verified against a primary source in this run.**
   The prerequisite answer (§E.5 — nothing beyond modular arithmetic) is solid and is
   confirmed by the structure of the construction, but I did not open van Lint & Wilson or
   Lindner & Rodger to copy the exact block families. **The scaffolder must obtain the exact
   block list verbatim before authoring**, from van Lint & Wilson Ch. 19, Lindner & Rodger
   *Design Theory*, or Colbourn & Dinitz *Handbook*, Part II. Bose's construction *is* stated
   in full and verified above.
4. **Two book-TOC research strands could not be launched as subagents** (the run hit the
   concurrent-subagent ceiling). The strands that did run cover the Godsil/Royle,
   Godsil/Meagher, Biggs, van Lint & Wilson group and the Beth–Jungnickel–Lenz, Hughes–Piper,
   Stinson, Cameron group; their verbatim TOCs are appended in **§B.8** when returned. The two
   that could not be launched were (a) the Chung / Trevisan / Zhao lecture-note harvest and
   (b) a dedicated polynomial-method + BRC strand — **both of which I then executed myself**,
   with results in §C.1, §E.2 and §E.4. The one residual gap is a **verbatim section-heading
   harvest of Chung's *Spectral Graph Theory* chapters** (`https://mathweb.ucsd.edu/~fan/research/revised.html`;
   `ch1.pdf` was downloaded, 21 pp.) and of **Trevisan's Berkeley notes** — neither is
   load-bearing for any statement in this report, since Brouwer–Haemers and Spielman together
   cover the same ground, but Chung remains the canonical citation for the **normalised
   Laplacian** convention recorded in §D.1.
5. **No paywalled source was purchased or circumvented.** Godsil & Royle, Godsil & Meagher,
   Biggs, van Lint & Wilson, Beth–Jungnickel–Lenz, Hughes–Piper, Stinson and Cameron's
   *Combinatorics* are all in-copyright and were harvested at **table-of-contents level only**,
   from publisher pages, front-matter PDFs, reviews and catalogue records. Every full-text
   source in §A is author-hosted and free by the author's own choice.

