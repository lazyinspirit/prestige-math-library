---
id: thm-author-394a5b71198d-murthy-chow-to-k-input
kind: theorem
title: Murthy top Chow cycle comparison with its actual exterior-dual map
status: draft
domain: mathematics
deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - math:def-projective-module
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-394a5b71198d-exterior-dual-interface: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: M. Pavaman Murthy, Zero cycles and projective modules, ICTP SMR.761/7
        preliminary lecture-note scan
      url: https://indico.ictp.it/event/a02275/contribution/6/material/0/0.pdf
      locator: Section 1 opening convention, printed p. 3 / PDF p. 5; Theorem
        2.14(i)–(ii), printed pp. 13–14 / PDF pp. 15–16; Definition 3.5 and
        Remark 3.6(i)–(ii), printed p. 17 / PDF p. 19
      statement: For regular integral affine algebras over an algebraically closed
        field in dimension n>=2, the natural closed-point cycle map CH^n(Spec A)
        -> F^n K0(A) is an isomorphism and F^n K0(A) has no (n-1)! torsion.
        Under this actual cycle map, the usual top Chow Chern class of a rank-n
        projective module maps to the alternating sum of exterior powers of its
        dual.
      hypotheses: A integral affine k-algebra, k algebraically closed of arbitrary
        characteristic, A regular, dimension n>=2; P finite projective of
        constant rank n. Theorem 2.14(i) applies via n=2 or via n>=3 and
        regularity in codimension one. The low-dimensional exclusions belong
        only to this import, not to the final splitting theorem.
      reading_limits: "Supplemental reading on 2026-11-10: visually read printed p. 3
        / PDF p. 5 of the same cached scan and authenticated its SHA256
        488956266748dcf211d02c09b2a058764414e212bc778e4379de6305cafef7f6. This
        page explicitly identifies the all-finite-module group with the
        finite-projective-dimension group; that identification requires the
        regular-ring comparison used below and is false for general singular
        rings. A fresh request to the ICTP PDF again timed out. Retained prior
        source-access account (not newly attested): Primary text actually read:
        the existing cached 34-page scan /tmp/research-murthy-1994.pdf, copied
        unchanged as top-chern-murthy-primary-scan.pdf in this run (SHA256
        488956266748dcf211d02c09b2a058764414e212bc778e4379de6305cafef7f6). Its
        actual cover identifies M. Pavaman Murthy, Zero cycles and projective
        modules, ICTP SMR.761/7, workshop 16–27 May 1994, and labels it
        preliminary lecture notes. Read rendered PDF pp. 1, 3, 15–16 and 19:
        cover, printed p. 1 introduction, printed pp. 13–14 Theorem 2.14 with
        its short proof, and printed p. 17 Definition 3.5, Remark 3.6 and
        Theorem 3.7 with its short proof. The cached download origin is not
        independently attested; fresh requests to the stated ICTP URL timed out.
        The ICTP contribution metadata and indexed introduction identify the
        same title and author. Canonical published bibliographic counterpart:
        Ann. Math. 140 (1994), 405–434, DOI https://doi.org/10.2307/2118605; the
        published journal bytes were not read. Dependent proofs cited inside
        Theorems 2.14 and 3.7, including Corollaries 3.4 and 1.9, were not
        reconstructed. Imports refer to the actual numbered statements in the
        identified primary scan, without asserting journal-page equivalence or a
        local reconstruction."
    - title: Charles Weibel, The K-book, author-hosted Chapter II
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf
      locator: Resolution Theorem 7.6 and its proof, printed pp.65–66; Definition 7.7,
        p.66; Corollary 7.7.2 and Lemma 7.7.1, p.67
      statement: Inclusion of finite projective modules into modules with a finite
        resolution by finite projectives induces an isomorphism on
        exact-relation K0; the inverse takes the alternating class of a finite
        projective resolution.
      hypotheses: The category H consists of modules admitting finite resolutions by
        finite projectives. No assertion about all finite modules over a
        singular ring is required. The local proof below verifies the projective
        case directly.
      reading_limits: Author-hosted Chapter II text at these locations read on
        2026-11-09; also visually read the supplied primary p.67 image in
        scratch/murthy-k0-model/weibel-II-p67.png. The retained source note
        identifies its historical PDF cache by SHA256
        529ea8a5853e9fa55279e7ad79047155409b10847bd924b56f708f0950ebc607; that
        historical PDF was not available at its recorded tmp path in this
        sandbox and its digest was not newly authenticated. Both the image and
        current hosted text print the erroneous minimum bound in Lemma 7.7.1;
        that bound is not used. No final printed-book or errata reading is
        claimed.
    - title: The Stacks Project, Regular rings and global dimension
      url: https://stacks.math.columbia.edu/tag/00OE
      locator: Lemma 10.110.8, Tag 00OE, equivalence of (1) and (2)
      statement: A regular Noetherian ring of finite Krull dimension n has global
        dimension n; every module consequently has projective dimension at most
        n.
      hypotheses: R is a commutative Noetherian regular ring of finite dimension n.
      reading_limits: Live HTML version retrieved on 2026-11-10; statement and short
        displayed proof read. Also read the finite-syzygy argument in Lemma
        10.110.2, Tag 00O9. No pinned source commit or recursive reconstruction
        of the cited commutative-algebra prerequisites is claimed.
    - title: The Stacks Project, Rings of finite global dimension
      url: https://stacks.math.columbia.edu/tag/0CXE
      locator: Lemma 10.109.6, Tag 0CXE, together with the projective-dimension
        conditions (1)–(4) of Lemma 10.109.4 in Section 10.109, Tag 00O2
      statement: A finite module M of projective dimension at most d over a Noetherian
        ring has a resolution of length at most d by finite projective modules.
      hypotheses: R is a commutative Noetherian ring, M is a finitely generated
        R-module, d is a nonnegative integer, and projective dimension of M is
        at most d.
      reading_limits: Live HTML version retrieved on 2026-11-10; Lemma 10.109.6
        statement and displayed proof, and the conditions and displayed proof of
        Lemma 10.109.4, read. No pinned source commit or recursive
        reconstruction of their linked prerequisites is claimed.
dependency_level: 14
local_argument_provenance: ai-altered
---

## Statement
Assume AC. Let $A$ be a regular integral affine algebra of dimension $n\geq2$ over an algebraically closed field of arbitrary characteristic, and put $X=\operatorname{Spec}A$. Write $K_0^{\mathrm{proj}}(A)$ for the Grothendieck group of finite projective modules, with exact-sequence relations. Let $F^nK_0^{\mathrm{proj}}(A)$ be its subgroup generated by the classes $[A/\mathfrak m]$ of the residue fields of smooth maximal ideals of height $n$; a finite projective resolution defines each such class. Then this subgroup has no $(n-1)!$ torsion, meaning that $(n-1)!x=0$ forces $x=0$. The natural cycle map $\phi:\mathrm{CH}^n(X)\to F^nK_0^{\mathrm{proj}}(A)$ sending each closed-point cycle $[x]$ to $[k(x)]$ is an isomorphism. For a rank-$n$ finite projective module $P$ and associated bundle $E$, the actual equality is $\phi(c_n(E))=C^K_n(P)=\sum_i(-1)^i[\Lambda^iP^*]$. Thus this class belongs to $F^n$, and $c_n(E)=0$ exactly when $C^K_n(P)=0$.

## External input
This is an explicitly imported established primary-source statement. The additional regular-ring finite-resolution input in [F5] is imported from the two precise Stacks statements cited above. The local steps check its hypotheses and translate its map; they do not reprove the zero-cycle theorem or its source proof. The map used is the closed-point cycle map phi, not a group isomorphism chosen without a map, and not the nth Chern operation on an arbitrary virtual K-class (whose composite with the cycle map carries a factorial). The degree-one interface and degree-zero boundary are proved independently in local prerequisites; no dimension-at-least-two hypothesis is silently applied there.

## Facts & Assumptions
**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] Theorem 2.14(i) supplies absence of factorial torsion for $n=2$, or for $n\ge 3$ when A is regular in codimension one. Its part (ii) supplies the natural cycle isomorphism for regular A.

[F2] Definition 3.5 and Remark 3.6(i)–(ii) identify the class with the exterior powers of the dual and with the usual top Chow Chern class under the cycle isomorphism.

[F3] The affine spectral/module interface for this actual alternating class is supplied by [[lem-author-394a5b71198d-exterior-dual-interface]].

[F4] A projective module lifts maps through surjections. [[math:def-projective-module]] The resolution comparison is verified below using this property. Weibel II, Theorem 7.6 and Corollary 7.7.2, pp.65–67, give the established general comparison; their role here is source documentation, not a replacement for the local relation checks. Murthy's Section 1 opening convention, printed p.3 / PDF p.5, defines the group using all finitely generated modules and identifies it with the group of finite modules of finite projective dimension. The all-finite-module group is denoted $G_0(A)$ here to distinguish the presentations. That source identification is justified in the present regular scope by [F5], but is not valid for arbitrary singular Noetherian rings.

[F5] The imported regular-ring resolution facts are Stacks Lemma 10.110.8 (Tag 00OE) and Lemma 10.109.6 (Tag 0CXE): a regular Noetherian ring of finite dimension $n$ has global dimension $n$, and every finite module of projective dimension at most $n$ admits a resolution of length at most $n$ by finite projectives. These are cited established premises; the comparison of exact-relation groups in steps 1.1–2.1 is supplied locally.

## Proof
1.1 Write $\mathcal P$ for finite projective $A$-modules and $\mathcal H$ for finite modules admitting finite resolutions by objects of $\mathcal P$. Give both groups short-exact-sequence relations. The latter category is extension closed: for $0\to M'\to M\to M''\to0$ and finite projective resolutions of the end terms, lift the map $P''_0\to M''$ to $M$ by projectivity and combine it with $P'_0\to M'$. This gives a surjection $P'_0\oplus P''_0\to M$ whose kernel sits in an exact sequence between the two first syzygies. Repeating, with resolutions padded by zeros, gives a resolution of $M$ with terms $P'_i\oplus P''_i$; the last extension of projective syzygies splits by the lifting property. Thus the inherited exact structure is defined, and inclusion induces $j:K_0^{\mathrm{proj}}(A)\to K_0(\mathcal H)$. [F4, construct]

1.2 For $M\in\mathcal H$, choose a finite resolution $P_\bullet\to M$ and put $\chi(M)=\sum_i(-1)^i[P_i]$. Given two resolutions, lift the identity of $M$ to a chain map by lifting successively through the surjections onto kernels in the target resolution. It induces the identity on degree-zero homology and both resolutions have zero higher homology, so its finite mapping cone is acyclic. Every bounded acyclic complex of projectives is split exact: in its lowest nonzero degree the preceding differential surjects onto a projective term and splits; remove that contractible pair and continue. The alternating projective class of the cone is zero, while its termwise alternating sum is the difference of the two resolution sums. Hence $\chi(M)$ is independent of the chosen resolution. [F4, construct, algebra]

2.1 The resolution in step 1.1 gives $\chi(M)=\chi(M')+\chi(M'')$ for every defining exact relation, using independence from step 1.2. Hence $\chi$ induces a homomorphism $K_0(\mathcal H)\to K_0^{\mathrm{proj}}(A)$. Length-zero resolutions give $\chi j([P])=[P]$. Each successive syzygy of a finite projective resolution is in $\mathcal H$, because the tail is its finite resolution. The corresponding short exact sequences telescope to $(M)=\sum_i(-1)^i(P_i)$ in $K_0(\mathcal H)$, so $j\chi((M))=(M)$. These are mutually inverse group maps, respecting every exact relation. [step 1.1, step 1.2, algebra]

3.1 The affine algebra $A$ is Noetherian, regular and of finite dimension $n$. By [F5] every finite $A$-module has a resolution by finite projectives of length at most $n$. Hence $\mathcal H$ is the whole category of finite $A$-modules, with exactly the same short exact sequences, so its exact-relation group is $G_0(A)$, the all-finite-module group in the source convention [F4]. Step 2.1 therefore makes $j:K_0^{\mathrm{proj}}(A)\to G_0(A)$ an isomorphism with inverse $\chi$. Write $(M)$ for the source class of a finite module; its image under $\chi$ is the resolution Euler class, and length-zero resolutions identify projective classes by $j$. This establishes the comparison with the source's full category, rather than only its finite-projective-dimension subcategory. For the subgroup $F^n_H$ generated by the selected $(A/\mathfrak m)$, $\chi$ restricts to an isomorphism onto the stated $F^nK_0^{\mathrm{proj}}(A)$, since it takes each residue module to its resolution Euler class and $j$ is its inverse. For the actual source cycle map $\phi_H$, the composite $\chi\phi_H$ sends $[x]$ to that same Euler class of $k(x)$; therefore it is the stated map $\phi$, with rational-equivalence descent inherited from $\phi_H$. The algebra is regular and integral, so Theorem 2.14(ii) applies. In part (i), use its $n=2$ alternative or its $n\geq3$ regular-in-codimension-one alternative. Thus [F1] gives the source cycle isomorphism and absence of $(n-1)!$ torsion in arbitrary characteristic, and the subgroup isomorphism transfers both assertions to the stated target. The comparison with $G_0(A)$ has used regularity and finite dimension explicitly; it asserts nothing analogous for a singular ring. [F1, F4, F5, step 2.1, given]

4.1 Apply [F2] to $P$ in the same presentation: $\phi_H(c_n(E))=\sum_i(-1)^i(\Lambda^iP^*)$. Every exterior term is finite projective, so its length-zero resolution gives $\chi((\Lambda^iP^*))=[\Lambda^iP^*]$. Applying $\chi$ proves exactly $\phi(c_n(E))=C_n^K(P)$, including membership in $F^n$. Injectivity of $\phi$ proves the asserted equivalence of vanishings. Finally [F3], under its inherited AC and universe assumptions, takes this actual projective-module alternating class to $\varepsilon(E)$ in the article's perfect group. The factorial in the distinct nth-Chern-operation composite has not replaced the actual point-cycle map. [F2, F3, step 2.1, step 3.1] ∎

## Source notes

The locally checked Euler comparison supplies the presentation translation; it does not reconstruct Murthy's deep zero-cycle inputs. The retained earlier source check reports visual reading of the cached scan's cover and printed pp.1–2, 13–14 and 17 (PDF pp.1, 3–4, 15–16 and 19). This round additionally visually read printed p.3 / PDF p.5 and authenticated the same cached PDF digest stated above. A fresh web request to the ICTP PDF timed out. Cached download provenance and correspondence with the final Annals wording remain unattested; journal bytes and the deep results cited within Murthy's short proofs were not read. The article passage maintained here is its Introduction, PDF p.1, citing Remark 3.6 and Theorem 3.7. The low-dimensional exclusions and all ordinary integral Chow and characteristic qualifications are unchanged.

The preliminary scan's Section 1 convention on printed p.3 is a separate consulted-literature defect outside the present regular scope. For $B=k[\epsilon]/(\epsilon^2)$, finite projectives are free, so $K_0^{\mathrm{proj}}(B)=\mathbb Z[B]$, whereas composition length gives $G_0(B)=\mathbb Z[k]$. The exact sequence $0\to k\to B\to k\to0$ makes the natural map send $[B]$ to $2[k]$; it is not an isomorphism. Steps 1.1–2.1 still compare projectives with finite-projective-resolution modules, so the scan cannot identify that category's group with all-finite-module $G_0$ in this singular example. In the assigned theorem, [F5] supplies precisely the missing regularity argument; no source error is attributed to the unread final journal version.

Retain the consulted-literature error in Weibel II, Lemma 7.7.1, p.67: its kernel projective-dimension bound prints a minimum where a maximum is required. For $R=k[t]$, the split exact sequence with kernel and quotient $R/(t)$ and middle term $(R/(t))^2$ has middle and quotient projective dimension one, but nonprojective kernel. The printed minimum would make that kernel projective. The local comparison above uses no such estimate; neither Murthy's results nor the resolution comparison is refuted by this source typo.
