---
id: thm-nagata-compactification-for-separated-finite-type-morphisms
kind: theorem
title: "Nagata compactification for separated finite-type morphisms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-separated-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-proper-morphism
  - def-open-immersion-schemes
  - lem-nagata-finite-dense-quasi-projective-open-cover
  - lem-nagata-refined-chow-projective-envelope
  - lem-nagata-simultaneous-boundary-closure-separation
  - lem-nagata-common-separated-gluing-after-blowup
  - lem-nagata-coherent-ideal-extension-with-controlled-support
  - lem-nagata-product-blowup-dominates-factor-blowups
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - cor-noether-normalisation-module-finiteness
  - lem-determinant-trick-for-nakayama
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - thm-separatedness-gluing-overlap-criterion
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
proof_strategy: direct
axiom_use: No choice principle is assumed. Finite dense open covers, the locally reconstructed Nagata blowup/gluing foundations and finite-dimensional field-quotient witnesses supply the construction. No compactification or general Zariski Main theorem is imported.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (4) (2010), 661–670"
      url: "https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf"
    - title: "Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint"
      url: "https://math.stanford.edu/~conrad/papers/nagatafinal.pdf"
      locator: "Theorem4.1, Noetherian proof internal pp.28–30; all34internalpages actually read. Deligne full10pages also read. No non-Noetherian approximation theorem is used."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $f:X\to S$ be a separated morphism of finite type between Noetherian schemes. There exist a Noetherian scheme $\overline X$, an open immersion $j:X\hookrightarrow\overline X$, and a proper morphism $\overline f:\overline X\to S$ such that $f=\overline f\circ j$.

## Statement references

[Deligne, §§0–1, Theorem 1.7, pp. 661–670](https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf)

[Milne, *Lectures on Étale Cohomology*, Chapter I, §18, pp. 119–120](https://jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** Exactly the separated finite-type morphism $f:X\to S$ between Noetherian schemes in the Statement.

[F1] A Noetherian finite-type $S$-scheme has a finite cover by dense quasi-projective opens. For each dense quasi-projective $U_i\subseteq X$, a coherent-ideal blowup $q_i:B_i\to X$, unchanged over $U_i$ with inverse image of $U_i$ equal to $U_i$, admits a dense open immersion $B_i\hookrightarrow P_i$ into a Noetherian scheme proper over $S$. [[lem-nagata-finite-dense-quasi-projective-open-cover]] [[lem-nagata-refined-chow-projective-envelope]]

[F2] In a finite proper-model diagram with proper maps from protected opens to the same separated finite-type $X$, an initially empty intersection of boundary inverse images can be made empty for their full scheme-theoretic closures, by blowups preserving all protected opens and maps. [[lem-nagata-simultaneous-boundary-closure-separation]]

[F3] A nonempty finite collection of separated finite-type models sharing a dense open has a common separated finite-type scheme covered by open copies of admissible blowups of those models, preserving the common open and making it schematically dense. [[lem-nagata-common-separated-gluing-after-blowup]]

[F4] Coherent ideals extend with controlled support; the blowup of a finite product dominates the individual blowups and makes their image ideals invertible. Coherent-ideal blowups are proper, unchanged off their centers and preserve an unchanged schematically dense open. [[lem-nagata-coherent-ideal-extension-with-controlled-support]] [[lem-nagata-product-blowup-dominates-factor-blowups]] [[lem-nagata-admissible-blowup-universal-property-and-properness]]

[F5] Separatedness is closedness of the diagonal; properness means finite type, separated and universally closed. Finite-type algebras over Noetherian rings are Noetherian. [[def-separated-morphism-schemes]] [[def-proper-morphism]] [[def-open-immersion-schemes]] [[def-locally-noetherian-and-noetherian-scheme]] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F6] A nonzero finite-type field algebra is module-finite over an injected polynomial subalgebra. The finite-module determinant trick gives $(1-a)M=0$ from $IM=M$, for some $a\in I$. Exact localization commutes with finite equalizers, and affine opens in a separated scheme over an affine base have affine intersections. [[cor-noether-normalisation-module-finiteness]] [[lem-determinant-trick-for-nakayama]] [[cor-localisation-commutes-with-kernels-images-and-cokernels]] [[thm-separatedness-gluing-overlap-criterion]]

## Proof

1.1 We first record the finite point-existence argument needed for proper-surjection descent. If $D$ is a nonzero finite-type algebra over a field $k$, [F6] makes it finite over an injected $k[z_1,\ldots,z_d]$. For $I=(z_1,\ldots,z_d)$, the equality $ID=D$ would give $(1-a)D=0$ with $a\in I$ by the determinant trick. Applying it to $1$ and using the injection contradicts evaluation at $z_i=0$. Thus $D/ID$ is a nonzero finite-dimensional algebra. A proper ideal of maximum vector-space dimension exists by a maximum in the finite set of dimensions; its quotient is a field finite over $k$, since every nonzero quotient element generates the unit ideal. Hence every nonempty finite-type field scheme has a point with finite residue extension. After any extension $K/k$, this point still has a point above it: its finite field extension tensored with $K$ is a nonzero finite-dimensional $K$-algebra, and the same maximum-dimension argument gives a field quotient. It follows that a finite-type surjection remains surjective after arbitrary base change, by applying this to each nonempty fiber. In particular proper surjections are universally surjective here. Moreover, if $h:Y\to Z$ is a proper surjection, $Y\to S$ is proper and $Z\to S$ is already separated and finite type, then $Z\to S$ is proper. Indeed, after any base change and for any closed $C\subseteq Z$, the inverse image $h^{-1}(C)$ is closed in the proper $Y$ and has the SAME image in the base as $C$ by surjectivity. That image is closed. This proves universal closedness and the assertion by [F5], without arbitrary-ring prime selection. [F5, F6, given, construct, algebra]

1.2 Scheme-theoretic closures used below are explicit at Noetherian scope. For a quasi-compact locally closed immersion $a:T\to Z$ of Noetherian schemes, take the ideal $\ker(\mathcal O_Z\to a_*\mathcal O_T)$. Over an affine base open the inverse image in $T$ has a finite affine cover, with affine intersections since the immersion is separated. Its sections are a finite equalizer. By [F6], restriction to a principal base open localizes this equalizer and its kernel. Thus the ideal is quasi-coherent and coherent by Noetherianity. Its quotient defines the smallest closed subscheme containing $T$. The given $T$ is open in that closure because it is already closed in a suitable ambient open, and it is schematically dense by the kernel definition. These formulas commute with open restriction. [F5, F6, construct, algebra]

2.1 Assume $X$ is nonempty. By [F1], choose a finite dense quasi-projective open cover $U_1,\ldots,U_r$ of $X$, and construct proper blowups $q_i:B_i\to X$ and dense open embeddings $B_i\hookrightarrow P_i$, with $P_i$ proper over $S$ and $q_i^{-1}(U_i)=U_i$. Each $q_i$ is surjective: its proper image is closed and contains the dense $U_i$. Put $U=\bigcap_iU_i$, a dense open of $X$, of all $B_i$ and of all $P_i$. In the finite product $\prod_SP_i$ take the scheme-theoretic closure $P$ of the diagonal copy of $U$ by step 1.2. The copy is locally closed, since it is closed in the open product of the $U_i$ by separatedness over $S$. The scheme $P$ is Noetherian and proper over $S$, being closed in a finite product of proper finite-type $S$-schemes. Its projections $\pi_i:P\to P_i$ are proper and surjective, since their closed images contain dense $U$. The copy of $U$ is schematically dense in $P$. [F1, F5, step 1.2, construct, algebra]

3.1 Give each closed complement $X\setminus U_i$ its reduced closed-subscheme structure, and put $D_i=q_i^{-1}(X\setminus U_i)\subseteq B_i$. The inverse images of the $D_i$ in $P$ have empty intersection. To see this, work on the open $W=P\cap\prod_SB_i$. The maps $q_i\pi_i:W\to X$ agree on the schematically dense $U$, so they agree everywhere by the closed diagonal of $X\to S$: pull back its ideal and use schematic density. Equivalently the tuple factors through the closed multiple diagonal of $X$. A point of every inverse image of $D_i$ would consequently give one point of $X$ lying in every $X\setminus U_i$, impossible because the $U_i$ cover $X$. Apply [F2] to the proper models $P_i$, protected opens $B_i$, proper maps $q_i$ and closed $D_i$. After blowups preserving every $B_i$ and $q_i$, the closure $P$ in the new product satisfies $\bigcap_i\pi_i^{-1}(\overline D_i)=\varnothing$, where $\overline D_i$ is the full scheme-theoretic closure in the new $P_i$. Rename the models and product closure accordingly. They remain Noetherian and proper, $U$ remains schematically dense in $P$, and all $q_i$ and $B_i$ are unchanged. [F2, F4, F5, step 1.2, step 2.1, construct, algebra]

4.1 Put $Q_i=P_i\setminus|\overline D_i|$. Its intersection with $B_i$ is $B_i\setminus|D_i|=q_i^{-1}(U_i)=U_i$, with its exact scheme structure. Glue the two $S$-schemes $X$ and $Q_i$ along this common open to form $M_i$. This is the finite open gluing of the specified structure sheaves, and is finite type over $S$. It is separated: the only cross-product diagonal to check is the graph of $U_i$ in $X\times_SQ_i$. Pull it back by $q_i\times1:B_i\times_SQ_i\to X\times_SQ_i$, a proper surjection by step 1.1. Its inverse image is exactly the restriction of $\Delta_{P_i/S}$ to $B_i\times_SQ_i$: equality of the first coordinate with the second forces both into $B_i\cap Q_i=U_i$, where $q_i$ is an isomorphism. It is therefore closed. A surjective closed map detects closed subsets by taking the image of their inverse images, so the original graph has closed underlying set. It is already a closed immersion over the open $U_i\times_SQ_i$; glue that defining ideal with the unit ideal on the open complement of its now-closed image. This proves it is a closed immersion in the full cross-product. The other diagonal pieces are closed by separatedness of $X$ and $Q_i$, proving $M_i$ separated. Finally $X$ is dense in $M_i$, since $U_i$ is dense in $Q_i$. [F5, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Apply [F3] to the finite dense open immersions $X\hookrightarrow M_i$. Obtain $X$-admissible blowups $b_i:M_i'\to M_i$ and a separated finite-type $S$-scheme $M$ covered by their open copies, with one common unchanged open $X\hookrightarrow M$, schematically dense in $M$. All the pieces $M_i'$ are Noetherian, and finitely many cover $M$, so $M$ is Noetherian. Denote the center ideals by $\mathcal J_i$. The target open immersion of the theorem will be this actual unchanged $X\hookrightarrow M$; the subsequent auxiliary blowup will be on a proper source mapping to $M$, and does not modify $X$. [F3, F4, F5, step 4.1, construct, algebra]

6.1 The opens $E_i=P\setminus\pi_i^{-1}(|\overline D_i|)$ cover $P$ by step 3.1 and all contain $U$. Projection gives maps $a_i:E_i\to Q_i\hookrightarrow M_i$. Pull back the center ideal $\mathcal J_i$ to a coherent ideal on $E_i$. It is unit on $U$, because $\mathcal J_i$ is unit on $X\subseteq M_i$. By controlled extension in [F4], extend it to a coherent ideal $\mathcal K_i$ on all of $P$, remaining unit on $U$, using closed support $P\setminus U$. Form $c:P^*=\operatorname{Bl}_{\prod_i\mathcal K_i}(P)\to P$. It is proper, and $U$ remains schematically dense by [F4]. The product-blowup maps make every image ideal $\mathcal K_i$ invertible. Over $E_i$ the universal property therefore gives a map $c^{-1}(E_i)\to M_i'\hookrightarrow M$ lifting $a_i$. These maps agree on the common unchanged $U$. Their overlap equalizers are closed because $M\to S$ is separated, and their ideals vanish on the schematically dense $U$, hence are zero. Thus the maps glue to an $S$-morphism $g:P^*\to M$. [F4, F5, step 2.1, step 3.1, step 5.1, construct, algebra]

7.1 The scheme $P^*$ is proper over $S$ as a proper blowup of the proper $P$. Since $M\to S$ is separated, the graph of $g$ is closed in $P^*\times_SM$, and projection to $M$ is the base change of $P^*\to S$. Hence $g$ is proper. Its image contains $U$, which is dense in $M$ because it is dense in $X$ and $X$ is dense in $M$. That image is closed by properness, so $g$ is surjective. The descent argument of step 1.1 now proves $M\to S$ proper. Taking $\overline X=M$, the open immersion from step 5.1 and its structure map gives exactly $f=\overline f\circ j$. [F4, F5, step 1.1, step 2.1, step 5.1, step 6.1, algebra]

8.1 If $X$ is empty, take $\overline X$ empty; its map to $S$ is proper by the finite-type, diagonal and closed-image definitions. This also covers empty $S$. Empty boundary subschemes and unit center ideals at intermediate steps give the permitted identity modifications. Throughout the nonempty construction all covers, products, coefficient witnesses and ideal families were finite. The only quasi-projectivity used was on the constructed dense open cover, and the given separated finite-type $X$ itself remained unchanged as an open subscheme in the final proper Noetherian scheme. This proves the original Statement with no extra hypothesis. [F1, F4, F5, step 7.1, algebra] ∎
