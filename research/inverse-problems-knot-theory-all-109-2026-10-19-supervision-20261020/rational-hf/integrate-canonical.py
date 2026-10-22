from pathlib import Path
import re, shutil
root=Path.cwd(); base=root/'research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/rational-hf'
aid='lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps'
iid='lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism'
tid='lem-integral-homology-spheres-are-connected-by-unit-knot-surgeries'
analytic=['lem-os-disk-and-polygon-analytic-foundations','thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization','thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts','lem-strong-polygon-admissibility-bounds-indices-and-positive-domains']
originals=['lem-heegaard-floer-correction-term-heegaard-invariance','lem-rational-ball-spin-c-cobordism-map-inequality']
for id in originals:
 target=base/'canonical-before'/f'{id}.md'
 if not target.exists(): shutil.copyfile(root/'items'/f'{id}.md',target)
# These exact two new paths are owned by this authoring integration.

def front(id,title,deps,urls):
 return '\n'.join(['---',f'id: {id}','kind: lemma',f'title: "{title}"','status: draft','origin: session','deps:']+['  - '+d for d in deps]+['aliases: []','proof_strategy: direct','provenance:','  statement: literature-derived','  proof: ai-altered','sources:','  references:']+sum(([f'    - title: "{t}"',f'      url: "{u}"'] for t,u in urls),[])+['---',''])

def sections(name,start,stop=None,drop=(),replace=()):
 lines=(base/name).read_text().splitlines()
 lines=[l for n,l in enumerate(lines,1) if n>=start and (stop is None or n<=stop) and not any(a<=n<=b for a,b in drop)]
 s='\n'.join(lines)
 for a,b in replace:s=s.replace(a,b)
 blocks=[]
 for part in re.split(r'^#{2,3} ',s,flags=re.M):
  if not part.strip():continue
  ls=part.splitlines(); title=ls[0].strip(); body=' '.join(x.strip() for x in ls[1:] if x.strip())
  if body:blocks.append(f'**{title}.** {body}')
 return blocks

def phase_proof(phases,firsttags):
 out=[]; prev=None
 for phase,blocks in enumerate(phases,1):
  for n,body in enumerate(blocks,1):
   label=f'{phase}.{n}'
   tags=firsttags if prev is None else f'step {prev}, {firsttags}'
   out.append(f'{label} {body} [{tags}]')
   prev=label
 out[-1]+=' ∎'
 return '\n\n'.join(out)+'\n'

ap1=sections('absolute-index-operation.md',9,141)
ap2=sections('positive-kirby-and-map-construction.md',8,220,drop=[(82,88),(133,136),(152,155)],replace=[('the preceding file','the preceding phase'),('at the beginning of this file','at the beginning of this phase'),('The remaining full map construction starts','The full map construction starts'),('These facts construct maps','')])
# All local argument text is carried into the canonical proof; historical scope/status paragraphs are not mathematical premises.
afront=front(aid,'Absolute rational Heegaard Floer grading and fixed-Spin-c cobordism maps',['def-heegaard-floer-plus-infinity-absolute-grading']+analytic+['thm-kirby-moves-classify-framed-link-presentations'],[('Ozsvath and Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary','https://arxiv.org/abs/math/0110170'),('Ozsvath and Szabo, Holomorphic Triangles and Invariants for Smooth Four-Manifolds','https://arxiv.org/abs/math/0110169')])
astatement=r'''## Statement

For a closed connected oriented rational homology three-sphere and each Spin$^c$ structure, the pointed minus, infinity and plus Heegaard Floer complexes over $\mathbb F_2$ admit an absolute rational grading, independent of the surgery presentation, extending their relative Maslov grading, with $\deg U=-2$ and $\deg[\mathbf x_0,0]=0$ for the standard generator of $S^3$. Heegaard-move isomorphisms preserve this grading and commute with the minus/infinity/plus sequence. A smooth connected Spin$^c$ cobordism between such manifolds induces infinity and plus maps, compatible with that sequence, homogeneous of degree $(c_1(\mathfrak s)^2-2\chi(W)-3\sigma(W))/4$. These maps are obtained from the fixed-Spin$^c$ triangle counts and the one- and three-handle maps, independently of their handle presentation. Here the Chern square uses the rational relative lift of the boundary-torsion Chern class.

## Statement references

[[def-heegaard-floer-plus-infinity-absolute-grading]]

## Facts & Assumptions

[F1] The disk and polygon analytic construction, with its stated good-end and strict admissibility hypotheses, is supplied by [[lem-os-disk-and-polygon-analytic-foundations]], [[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]] and [[lem-strong-polygon-admissibility-bounds-indices-and-positive-domains]]. Counts below are made only after choosing that data; their algebraic weights and index normalizations are constructed below.

[F2] Pointed Heegaard-move invariance is supplied by [[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization]]. Its relative disk-grading interface is used here; the absolute grading and handle normalizations are not assumed.

[F3] Framed-link presentation existence and Kirby move completeness, including the relative presentation comparison, are supplied by [[thm-kirby-moves-classify-framed-link-presentations]].

## Proof

**Given:** A pointed admissible Heegaard diagram, a rational homology sphere with a Spin$^c$ structure, and a smooth Spin$^c$ cobordism when a map is under consideration. Write $R=\mathbb F_2[U,U^{-1}]$. Choose strict admissible data before counting. In a connected sum of standard $S^1\times S^2$ diagrams, $\theta_+$ and $\theta_-$ denote the top and bottom exterior generators; their degree difference in each torus is one. Their tensor descriptions follow directly by separating the torus factors: the two empty bigons cancel over $\mathbb F_2$ and no mixed disk survives the neck limit.

'''
(root/'items'/f'{aid}.md').write_text(afront+astatement+phase_proof([ap1,ap2],'F1, F2, F3'))

p1=sections('completed-surgery-and-localization.md',7,198,drop=[(113,117)],replace=[('The exact winding construction still required here','The winding-domain construction'),('The remaining geometric input is not a new closed-HF invariant.','The geometric input is the following winding model.')])
p1.insert(0,r'**Finiteness and Laurent freeness in a torsion structure.** For a torsion Spin$^c$ structure the relative Maslov grading is integral, and the finite infinity complex is a finite free graded module over $R$, with $U$ of degree $-2$. Its homology is finitely generated and graded. The ring $R$ is a graded field: every nonzero homogeneous element is a Laurent monomial and is invertible. A homogeneous maximal independent set therefore spans, since the usual elimination can always divide by its nonzero homogeneous pivot. Thus this homology has a finite homogeneous Laurent basis. In particular rank after extending scalars to $K$ determines the number of free Laurent summands; there is no Laurent torsion in a torsion Spin$^c$ structure. This assertion is not applied to the non-torsion structures with cyclic Maslov grading used later.')
p2=sections('uniform-plus-winding-comparison.md',7,129,replace=[('the preceding file','the preceding phase'),('`completed-surgery-and-localization.md`','the preceding truncation-index calculation')])
p3=sections('nonprimitive-fixed-spinc-triangle-operation.md',15,126,replace=[('the preceding files','the preceding phases')])
p4=sections('rational-infinity-standardness-assembly.md',15,176,drop=[(75,83)])
p5=sections('rational-cobordism-image-assembly.md',9,150,replace=[('The infinity/plus square is the chosen-handle','The infinity/plus square is the chosen-handle square already constructed.')])
# The newly delivered supplier discharges the formerly conditional integral-sphere base.
p4.insert(2,r'**The integral-sphere induction base and its order.** The standard genus-zero diagram gives $HF^\infty(S^3)=R$ in even parity. Apply [[lem-integral-homology-spheres-are-connected-by-unit-knot-surgeries]] to choose a finite sequence of preferred-framing $+1$ or $-1$ knot surgeries from $S^3$ to the given integral homology sphere, every intermediate manifold an integral homology sphere. The preceding actual cone cancellation preserves infinity rank at each successive surgery. The Euler calculation in this phase gives signed rank one, so the resulting rank-one Laurent module is in even parity. This establishes the integral-sphere case before the rational order induction, and does not extract a unit-surgery sequence from Kirby classification alone.')
ifront=front(iid,'Infinity standardness and fixed-Spin-c rational-cobordism isomorphisms',[aid,tid,'thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant']+analytic,[('Ozsvath and Szabo, Holomorphic Disks and Three-Manifold Invariants: Properties and Applications','https://arxiv.org/abs/math/0105202'),('Ozsvath and Szabo, Holomorphic Triangles and Invariants for Smooth Four-Manifolds','https://arxiv.org/abs/math/0110169'),('Ozsvath and Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary','https://arxiv.org/abs/math/0110170')])
ibody=r'''## Statement

For every closed connected oriented rational homology three-sphere $Y$ and Spin$^c$ structure $\mathfrak t$, the absolutely graded infinity group $HF^\infty(Y,\mathfrak t;\mathbb F_2)$ is a single free Laurent tower. If $W:Y_0\to Y_1$ is a smooth connected rational homology cobordism between rational homology spheres, then for each fixed Spin$^c$ structure $\mathfrak s$ on $W$ the infinity map is a degree-zero isomorphism. The corresponding plus map commutes with the infinity-to-plus maps. This conclusion concerns each individual extending Spin$^c$ structure, including nonprimitive handle attachments and torsion labels.

## Statement references

[[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]]

[[lem-integral-homology-spheres-are-connected-by-unit-knot-surgeries]]

## Facts & Assumptions

[F1] Absolute grading and the actual fixed-Spin$^c$ chosen-handle maps, with their degree and handle-presentation identities, are supplied by [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]].

[F2] The finite integral-homology-sphere sequence of preferred $\pm1$ knot surgeries is supplied by [[lem-integral-homology-spheres-are-connected-by-unit-knot-surgeries]]. No stronger consequence of the Kirby interface is assumed.

[F3] The disk/polygon good-end counts and strict domain bounds are supplied by [[lem-os-disk-and-polygon-analytic-foundations]], [[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]] and [[lem-strong-polygon-admissibility-bounds-indices-and-positive-domains]]. The pointed and hat invariance interfaces are [[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization]] and [[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]. The winding, truncation comparison and individual torsion-label algebra below are additional constructions.

## Proof

**Given:** The stated rational homology spheres and, for the second assertion, a rational homology cobordism with one fixed Spin$^c$ structure. Put $R=\mathbb F_2[U,U^{-1}]$ and $K=\mathbb F_2((U))$. Rank means Laurent rank, equivalently dimension after the faithful field extension to $K$. In a nonprimitive rank-lowering handle write its attaching class as $m h$, where $h$ is primitive in the free quotient; the extensions of a fixed incoming structure are indexed by $i\in\mathbb Z/m$. The individual maps are labelled before summing any counts.

'''
(root/'items'/f'{iid}.md').write_text(ifront+ibody+phase_proof([p1,p2,p3,p4,p5],'F1, F2, F3'))

# Preserve both original Statements byte for byte. Only dependencies, proof provenance and the escalated proof body change.
def replace_original(id,deps,proof):
 path=root/'items'/f'{id}.md'; s=(base/'canonical-before'/f'{id}.md').read_text()
 s=s.replace('  proof: not-supplied','  proof: ai-altered')
 s=s.replace('verification:\n  precheck: n/a\n','')
 pos=s.index('dependency_level:')
 s=s[:pos]+''.join('  - '+d+'\n' for d in deps)+s[pos:]
 s=s[:s.index('## Proof status')]+proof
 path.write_text(s)

invproof=r'''## Facts & Assumptions

[F1] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] constructs the absolute grading and its compatibility with pointed moves and the minus/infinity/plus sequence.

[F2] [[lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism]] proves that the infinity group of each rational-sphere Spin$^c$ structure is a single Laurent tower.

## Proof

**Given:** A rational homology sphere $Y$, a Spin$^c$ structure $\mathfrak t$, and a finite admissible pointed diagram. Put $R=\mathbb F_2[U,U^{-1}]$ and choose a homogeneous Laurent generator $\rho$ of $HF^\infty(Y,\mathfrak t)$.

1.1 The minus chain complex is finite free over $\mathbb F_2[U]$, with generators $[\mathbf x,-1]$ for the finitely many intersection points in $\mathfrak t$. Its homology is finitely generated and its localization is the infinity homology, since localization is exact and the localized differentials are identical. Thus the graded image $L$ of $HF^-\to R\rho$ is nonzero. Its degrees are bounded above by the largest degree of a minus-chain generator. The set of integers $j$ with $U^j\rho\in L$ is consequently nonempty, bounded below, and closed under addition of nonnegative integers. If $a$ is its minimum, that set is exactly $\{a,a+1,\ldots\}$. Every homogeneous element of the Laurent tower is a monomial multiple of $\rho$, and the image is graded; hence $L=U^a\mathbb F_2[U]\rho$. [F1, F2]

1.2 The long exact sequence of the actual short exact sequence $CF^-\to CF^\infty\to CF^+$ identifies the image in plus homology, with its grading, as $R\rho/U^a\mathbb F_2[U]\rho$. Its nonzero homogeneous elements have exponents $j<a$, so their least degree is $\deg\rho-2(a-1)$, attained at $U^{a-1}\rho$. Sending the standard tower element $U^k$ to $U^{k+a-1}\rho$ identifies the image with $R/U\mathbb F_2[U]$ shifted by this least degree. Multiplying any individual element sufficiently many times by $U$ kills it, while decreasing exponents supplies a preimage under any power of $U$. This proves all the tower assertions. [step 1.1]

1.3 The pointed-move maps preserve absolute grading and the minus/infinity/plus exact sequence, so they carry $L$ onto the corresponding image lattice and induce grading-preserving tower isomorphisms. Therefore the least degree is independent of the diagram and auxiliary data. Choosing $U^b\rho$ instead changes $a$ to $a-b$ and $\deg\rho$ to $\deg\rho-2b$, leaving that degree unchanged. In the genus-zero diagram of $S^3$ there is one generator $[\mathbf x_0,0]$ of degree zero, no nonconstant disks, and minus lattice $U\mathbb F_2[U][\mathbf x_0,0]$. Here $a=1$, giving $d(S^3)=0$. [F1, step 1.1, step 1.2] ∎
'''
replace_original(originals[0],[aid,iid],invproof)
ballproof=r'''## Facts & Assumptions

[F1] [[lem-punctured-rational-homology-balls-are-rational-cobordisms]] gives the two rational homology inclusion isomorphisms, the boundary orientations, $\chi(W)=0$ and the zero rational intersection module.

[F2] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] and [[lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism]] construct, for each fixed extending Spin$^c$ structure, the compatible infinity and plus maps and prove the degree-zero infinity isomorphism.

[F3] [[lem-heegaard-floer-correction-term-heegaard-invariance]] supplies the grading-preserving tower and its bottom degree, with $d(S^3)=0$; [[lem-commuting-laurent-and-plus-maps-give-bottom-degree-inequalities]] supplies the bottom-degree comparison for the commuting square.

## Proof

**Given:** The stated rational homology ball, its oriented boundary, and an extending Spin$^c$ structure; let $W$ be obtained by removing an interior open ball.

1.1 The two boundary inclusions are rational homology isomorphisms and $H^2(W;\mathbb Q)=0$. In particular the square of the Chern class is zero, and $\chi(W)=\sigma(W)=0$. The same assertions hold for the reverse cobordism from $Y$ to $S^3$. For each of the fixed induced Spin$^c$ structures, the constructed infinity map is an isomorphism with degree $(0-2\cdot0-3\cdot0)/4=0$, and the corresponding plus map commutes with the infinity-to-plus projection. This uses the individual fixed-structure conclusion, including torsion extensions. [F1, F2]

1.2 Apply the supplied commuting-square comparison first to $W:S^3\to Y$ and then to its reverse $Y\to S^3$. The degree-zero isomorphisms give respectively $d(Y,\mathfrak t)\ge d(S^3)=0$ and $d(S^3)=0\ge d(Y,\mathfrak t)$. These are exactly the two stated inequalities in both orientations. [F3, step 1.1] ∎
'''
replace_original(originals[1],[aid,iid],ballproof)
print('Archived two originals; authored two necessary suppliers; filled two original proofs. No Statement or Definition changed.')
