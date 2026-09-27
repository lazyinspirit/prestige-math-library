# Batch-8 local algebraic-group bridge: source and cap audit

Read-only evidence for the selected AV/RL batch-8 A page. The stable Step-1
manifest has 27 A items and a 60-item A cap, leaving 33 slots. This audit
does not alter that manifest, the plan, scope, readiness receipts, or engine.
It tests whether the general complex semisimple flag geometry could be
proved *within that A page*, instead of adding the proposed predecessor pair.

**Verdict.** The group-geometry branch is numerically small enough to
outline within 33 slots, but a complete source-backed local proof within
that allowance is **not verified**. The eight results proposed in the
worker notes are interface names, not eight standalone proofs: Milne's
source proofs import multiple chapters of algebraic-group structure that
the current published pages do not supply. A local build is a conditional
research route, not a current readiness repair. The same 33 slots must
also serve the missing coherent/Proj/cohomology and duality interfaces
elsewhere in the A page; no complete page-wide allocation has been proved.

## Minimum dependency-ordered interfaces

The table follows a deliberately narrower route than Milne's full
classification of all parabolics. It fixes an *existing* connected,
algebraically simply connected, complex semisimple affine algebraic group
\(G\), a Borel \(B\supset T\), and its Lie algebra; constructing \(G\) from
a root system is outside the selected row-8 claim. “Local” below means
that the proof has to appear in the A page or in an actually built
prerequisite, not merely in the cited book.

| Order | Exact local interface | Milne source and hidden input |
|---|---|---|
| 1 | Algebraic action/representation and a line whose stabilizer is any chosen closed subgroup \(H\subset G\) | Chevalley Theorem 4.27 (printed pp. 94–95) constructs the line using finite-dimensional \(G\)-stable pieces of the coordinate Hopf algebra; a smooth Lie representation or point-set orbit is insufficient. |
| 2 | Algebraic quotient \(G/H\), smooth quotient tangent \(\mathfrak g/\mathfrak h\), and torsor structure for smooth \(H\) | Milne Propositions 7.11, 7.15, 7.17 and Theorem 7.18 (pp. 141–143) use faithfully flat orbit maps and representable quotients. They do not follow from the published real-manifold \(G/H\) page. |
| 3 | Projective flag model and Borel closed orbit | Prove Lie–Kolchin triangularization (Theorem 16.30, pp. 335–336), projectivity of the ordinary \(\mathrm{GL}(V)\) flag variety (Proposition 7.30, p. 146), and the solvable fixed-point/closed-orbit argument (Corollary 17.3 and Theorem 17.9, pp. 353–355). Theorem 17.9's proof embeds \(G/B\) as a closed orbit in that projective flag variety and establishes conjugacy of Borels. This route avoids invoking Milne's algebraic highest-weight existence Theorem 22.20, which is itself a deep result. |
| 4 | Algebraic root subgroups and rank-one \(\mathrm{SL}_2\) map | Theorem 21.11 (pp. 428–429) gives \(U_\alpha\simeq\mathbf G_a\), \(\operatorname{Lie}U_\alpha=\mathfrak g_\alpha\), representatives of \(s_\alpha\), and the coroot. Its proof imports reductive torus-centralizer theory (17.59), rank-one classification/central isogeny (Proposition 20.32, pp. 418–419), and cocharacter contraction (13.33–13.34). The published Lie \(\mathfrak{sl}_2\) triple and abstract reflection do not supply an algebraic \(\mathrm{SL}_2\to G\). |
| 5 | Borel factorization and opposite open cell | Theorem 21.68 (pp. 445–446) proves \(B=T\ltimes U\) and \(\prod_{\alpha>0}U_\alpha\simeq U\) as varieties; its proof uses the strictly positive torus-action Luna-map theorem 13.41 (pp. 269–270) and cocharacter subgroup Theorem 13.33 (pp. 266–267). Theorem 21.84 (p. 452) gives the open immersion \(U^-\times B\to G\). A bijection on complex points or Lie tangent spaces alone would not establish the algebraic isomorphisms. |
| 6 | Group Bruhat double cosets, algebraic cells, and lengths | Lemma 21.69 (pp. 446–447) uses the rank-one double-coset relation, root-group generation, and the exchange relation to cover \(G\). Propositions 21.77–21.79 and Theorem 21.80 (pp. 449–451) identify \(BwB/B\simeq U^w\simeq\mathbf A^{\ell(w)}\), then Theorem 21.84 identifies the dense big cell. The published abstract Weyl inversion count only supplies the final dimension equality, not the group stratification or orbit isomorphism. |
| 7 | Rank-one parabolic, its fibre, and locally trivial projection | For each simple \(\alpha\), construct the *minimal-over-\(B\)* \(P_{\{\alpha\}}=B\cup Bs_\alpha B\), prove it is an algebraic subgroup, and use its rank-one Levi to obtain \(P_{\{\alpha\}}/B\simeq\mathbf P^1\). Milne Theorem 21.91 (pp. 454–455) proves the more general \(P_I\) classification using the concentrator scheme of §13.58. The rank-one case could replace that general theorem if its closed-subgroup and quotient arguments are written out. Theorem 25.9 (pp. 549–550), using 13.33, gives Zariski-local sections of \(G\to G/P_{\{\alpha\}}\) and hence local products for \(G/B\to G/P_{\{\alpha\}}\). Milne Proposition 21.88 uses \(P_\alpha\) for a generally *maximal* parabolic, so that symbol cannot silently stand for this rank-one fibre. |
| 8 | Algebraic associated lines and isotropy determinants | A local section of \(G\to G/B\) (Proposition 16.55(c), p. 344, or Theorem 25.9) permits descent of \(G\times_B\mathbf C_{-\lambda}\). Proposition 18.14 (p. 391) identifies equivariant line bundles with \(X^*(B)=X^*(T)\); the tangent representation \(\mathfrak g/\mathfrak b\) and rank-one vertical tangent give \(K_{G/B}=\mathcal L_{-2\rho}\) and \(K_\pi=\mathcal L_{-\alpha}\). These are the selected A page's existing rows 11–16, but they require interfaces 1–7, not the smooth real quotient supplier. |

For these geometry claims, \(2\rho\) and every root \(\alpha\) are already
characters of \(T\). The stronger assertion that every abstract integral
weight is a character because \(G\) is algebraically simply connected is
not needed to prove rows 8–16. If it is later asserted, the exact source
is Milne Proposition 23.59 (p. 504); its converse uses the root-datum
existence theorem, so it must be treated as a separate deep bridge.

## Cap implication and unresolved proof point

One very compressed allocation could use roughly 2–3 items for algebraic
quotients and Chevalley, 2–3 for the Borel/projective argument, 3–4 for
rank-one roots and \(U\)-factorization, 3–4 for Bruhat/big-cell/cell
isomorphisms, and 2–3 for the minimal parabolic and local torsor charts:
approximately 12–17 *additional* A items. That is an interface estimate,
not a lower bound or a proof. It leaves 16–21 of the 33 free slots for
all other missing A-page infrastructure. No complete proof bodies,
dependency edges, or receipts for those added items exist.

The decisive unverified steps are: (i) an algebraic rank-one map
\(\mathrm{SL}_2\to G\) from the published Lie triple, without importing
Milne 20.32 wholesale; (ii) an algebraic root-group product isomorphism
and Bruhat orbit isomorphisms, without silently importing 13.41 and the
rank-one exchange proof; and (iii) the quotient/projectivity package,
including Chevalley 4.27, faithfully flat orbit representability, and
Lie–Kolchin/Borel fixed points. Each is a substantive theorem family.
One may bypass full algebraic highest-weight theory via Theorem 17.9 and
bypass full parabolic classification by proving only the rank-one case,
but neither bypass supplies (i)–(iii). Published complex Lie roots and
smooth quotients cover only the Lie-theoretic inputs. Brion's
[*Lectures on the Geometry of Flag Varieties*](https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf),
§§1.2–1.4, proves a concrete \(\mathrm{GL}_n\) model and does not close
the arbitrary-\(G\) gap; Lurie's three-page Borel–Weil–Bott note assumes
that gap closed.

Thus the **group branch alone might fit numerically**, but the present
33-slot page cannot be certified to contain a complete local proof of
that branch, much less the entire A page. Keep the flag items escalated
until the actual root/quotient/Bruhat arguments are authored and audited.
No new A/B pair is logically forced by a mathematical impossibility
proof; the proposed predecessor pair is an organizational way to give
these deep results their own proof and review capacity.
