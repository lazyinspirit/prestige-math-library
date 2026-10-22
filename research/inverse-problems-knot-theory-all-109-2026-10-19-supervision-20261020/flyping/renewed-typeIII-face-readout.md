# Literal typeIII face readout

Renewed user-authorized development by `/root/flyping_repair`, 2026-10-20. This records the physical normal-cell readout of the third row of Kindred v2 Figure31, rather than treating its lower surface as one unnamed disk. The original vector `LastMoveJ.pdf` was obtained in the actual source archive from `https://arxiv.org/src/2008.06490v2`; the relevant TeX passage is Theorem5.22. The source archive adds no missing written isotopy to the PDF passage.

## The five actual disk pieces

Use the old upper disk piece $X$. In its front boundary direction the common-face attaching arcs occur as

$$
W_0\; E0\; B_0\; O\; B_1\; E1\; W_1.
$$

The ordinary-channel names $E0,E1$ and active channels $O,U$ name physical proper link-arc channels in the prism, not link components. The inner projection wall has channel order $E0,O,U,E1$; the outer wall has order $E0,U,O,E1$. The overpass switches its projected order with $U$ once. These orders are retained at all wall subdivisions.

There are four selected lower pieces attached to $X$, one along each of $W_0,B_0,B_1,W_1$. They are not four copies of one unspecified global lower disk. In the literal normal-cell model their complementary boundary walks are as follows. The notation `inner` or `outer` means the fragment of the old longitudinal tube section between its common-face endpoint and that physical wall. Each $R$ denotes the complete actual wall walk with all its marked interval subdivisions.

| Lower piece | Attaching common-face interval | Complementary boundary walk |
|---|---|---|
| $L_0$ | $W_0$ | left end-face continuation; outer-wall walk to $E0$; $E0_{\rm outer}$ |
| $L_b$ | $B_0$ | $E0_{\rm inner}$; $R^{\rm in}_{E0,O}$; $O_{\rm inner}$ |
| $L_c$ | $B_1$ | $O_{\rm outer}$; $R^{\rm out}_{O,E1}$; $E1_{\rm outer}$ |
| $L_1$ | $W_1$ | $E1_{\rm inner}$; $R^{\rm in}_{E1,U}$; $U$; $R^{\rm out}_{U,\rm end}$; right end-face continuation |

The attaching interval and its complementary walk have opposite boundary directions on the corresponding lower disk. A direction in the table may therefore be reversed when inserting it into the boundary direction of $X$.

The $U$ channel belongs to $L_1$, the lower **white-end** piece. It does not belong to the small black $B_1$ cap. This matters geometrically: a path from $U$ to $O$ cannot be declared to lie entirely in that black lower cap. The original vector figure separates the small inner-wall $E0$–$O$ disk, the small outer-wall $O$–$E1$ disk, the left white-end disk, and the large right white-end disk with the $U$ boundary. No such incidence follows from naming only whole global lower disks.

## Boundary composition with all seam occurrences

Substitute these complementary walks for the four attaching intervals of $X$. At $E0$, its lower outer fragment, its displayed upper interval, and its lower inner fragment concatenate into one entire old channel interval. At $O$, the inner lower fragment, the displayed upper overpass interval, and the outer lower fragment concatenate into one whole old interval. At $E1$, the outer lower fragment, the displayed upper interval and the inner lower fragment concatenate into one whole old interval. The entire $U$ interval occurs once on $L_1$.

Therefore, after the neighboring end-face identifications and the central-disk attachment, the boundary walk in this prism has whole-channel order

$$
E0\quad R^{\rm in}_{E0,O}\quad O\quad R^{\rm out}_{O,E1}\quad E1\quad R^{\rm in}_{E1,U}\quad U,
$$

followed by the actual outer/end-face continuation toward $E0$ through the rest of the shadow boundary. No wall interval has been canceled merely because two occurrences belong to the same whole lower disk. This calculation also shows where the old $U$ interval is supplied; it is not an invisible section guessed on the active tube.

## A specified slit in the old disk

Choose $u$ in the old $U$ interval and $o$ in the interior of the displayed old overpass interval $O\cap\partial X$. Within the actual disk $L_1$, take a simple arc from $u$ to an interior point $w$ of its attaching interval $W_1$. In $X$, take an arc from $w$ to $o$ which cuts off the boundary subdisk containing $B_1$ and $E1$ but not $B_0$ or $E0$. Choose the first arc so that the $E1_{\rm inner}$ part of $\partial L_1$ is on the same bank as that subdisk. Such choices are explicit disk choices with specified boundary intervals; straighten a boundary collar to a rectangle and use its cross interval. Their union, rounded at $w$, is a proper arc $\beta$ in the actual selected disk $F_i$.

Cutting $F_i$ along this arc separates the $B_0/E0$ side from the $B_1/E1$ side. Its two complete outside boundary words are

$$
P=R_{U,E0}\;E0\;R^{\rm in}_{E0,O},\qquad
Q=R^{\rm out}_{O,E1}\;E1\;R^{\rm in}_{E1,U},
$$

where $R_{U,E0}$ includes the entire outer/end-face continuation, with all neighboring-prism intervals if present. Thus the bank labels in the earlier slit-disk computation now refer to specified actual old pieces: the $P$ bank contains the $B_0$-side attachment and the $Q$ bank the $B_1$-side attachment. It is not legitimate to choose a different arc in a lower black disk while keeping this boundary claim.

## What this does and does not transfer

For a realized cap model with this exact normal-cell table, the slit-disk successor computation gives the new boundary $U'\,P\,O'\,Q$, with all old seam occurrences and channel endpoint pairs preserved. The remaining geometric step is to carry these two actual banks to the two lateral windows of the actual positive crossing band, through the old-surface complement, retaining the just-computed $P,Q$ windows. The narrow local band and tube adapters in the independent bridge development supply the inside-book part; they do not by themselves perform this outer-bank transfer.

Uniform use for arbitrary normalized typeIII input additionally needs the face table itself derived from the actual normal-curve traces and their signs. The source states that the prism intersects $F$ in the pictured way. This note has resolved the **pictured model's** physical lower-piece and boundary incidence, but does not replace that normal-form assertion by an independent generic proof. In particular, the table must not silently be imposed on an input with extra wall connections. The finite planar readout needed for that transfer is now exactly specified by the table and the two wall channel orders above.

The renewed derivation and global-label parity calculation below address that outstanding transfer; the preceding paragraph records the intermediate model-only boundary rather than a claim that the picture alone suffices.

## Derivation from the named inner returns

The following renewed derivation addresses that transfer at the actual normalized typeIII scope. Keep the actual innermost upper circle, the thin annulus, the graph placement and its actual lower-circle returns. “Inner” means the $T_-$ side, not the direction along the oriented link. The root-side lower return paired with the common black arc $B_0$ is typeIII: its initial endpoint is $E0\cap B_0$ with sign $B+$, and its terminal endpoint is $O\cap B_0$ with sign $B-$. It runs through the inner region, so its two annular end fragments are $E0_{\rm inner}$ and $O_{\rm inner}$. The finite lower common-band chain between them lies further inside $Y_1$ and changes neither end fragment. This is the named return around the black $B_0$ ear; its terminal endpoint is **not** on $E1$.

There is a second inner return at the underpass point projecting to the displayed upper overpass. Its initial type is U and its terminal type is W+. The physical terminal interval is derived by the black-core guide argument below, rather than by assuming the pictured terminal is the “next white arc”. The conclusion is the typeII return through $U$ to $E1\cap W_1$. Its $E1$ annular fragment is inner. This names both returns used by the typeIII prism rather than treating the label “typeIII” as a single unnamed lower arc.

The ordinary-edge endpoint rule is local: a longitudinal graph section crosses from its upper arc to its lower arc at its common-face endpoint; its lower continuations lie at the two opposite longitudinal ends of that upper arc. Hence, once the black $E0$ continuation is inner, the white $E0$ continuation is outer. Once the white $E1$ continuation is inner, the black $E1$ continuation is outer. The two lower continuations of the displayed overpass interval are similarly the inner fragment at $B_0$ and outer fragment at $B_1$. These statements follow by following the **one** continuous old longitudinal section through the given upper interval, not by selecting new torus angles. This gives the first three rows of the table and the $E1$ entry of its fourth row.

The full $U$ channel cannot leave through a white dual end face, which is disjoint from the tube. It has no interior endpoint, and its old boundary section cannot split into a second old section. There is no old piece in the sole active crossing book. Thus the local piece containing the named typeII return contains the whole $U$ interval between its two physical wall endpoints. It is precisely the piece attached along $W_1$. This proves the remaining entry of the fourth row. The actual wall channel orders then determine its inner connection $E1$–$U$ and its outer connection $U$–right end. The lower $B_0$ and $B_1$ strips respectively connect the adjacent inner pair $E0$–$O$ and adjacent outer pair $O$–$E1$. Every inherited subdivision along those wall connections remains in the corresponding $R$ word.

There are no unrecorded local old sheets over the gap witnesses used here. Choose the annulus small enough to miss each projected lower boundary trace disjoint from the upper circle. Any additional lower boundary trace entering this typeIII annulus would have to be a common-face trace not on the upper circle, a second old section of one of its four tube channels, or a crossing piece at its only book. The first is excluded by the annulus choice, the second by the one-section condition, and the third by absence of an old piece in the active book. An additional graph dome whose boundary misses the annulus would cover either none of its connected upper circle or all of it. The latter covers a white point just inside $T_+$ near that circle and contradicts the actual positioning condition that each such white vertical fiber has only its upper-disk point. Hence no such extra dome is present. This is specific to the literal typeIII annulus, and makes no assertion excluding the explicit extra disks allowed in a typeI prism.

## Two actual cut-ball spheres from projected witnesses

The face table now supplies strict witnesses for the global lower-disk nesting, independent of repeated whole-surface names elsewhere. First apply the new ordinary-upper-interval lemma to $E1$: the global lower disks carrying $W_1$ and $B_1$ are distinct. This fact precedes the sheet count; it is not deduced by imposing two local copies of an unknown global disk. The complete global-label toggle calculation below then says that an outer-wall point $p$ strictly between $O$ and $E1$ belongs to exactly those two global lower domains. A point $q$ strictly between $U$ and $O$ belongs just to $W_1$. Thus there are two actual graph heights over $p$ and one over $q$. Their root-avoiding projected domains overlap, and the $q$ witness rules out inclusion of $W_1$ in $B_1$. Laminarity therefore gives

$$
\Delta_{B_1}\subset\operatorname{int}\Delta_{W_1},\qquad h_{W_1}<h_{B_1}\text{ on }\Delta_{B_1}.
$$

There is no intermediate disk: one would cover $p$ and give a third lower sheet in this typeIII annulus. There is no disk covering $W_1$: one would cover $q$ and give a second sheet there. Thus $W_1$ is an outermost dome and $B_1$ its immediate child. An inner-wall point strictly between $E0$ and $O$ sees just the $B_0$ disk, so $B_0$ is also outermost. The left white gap similarly witnesses the root-facing $W_0$ disk. These are actual cut-ball incidences: the lower copies of $W_0,B_0,W_1$ belong to the root cut ball; the upper copy of $W_1$ and lower copy of its immediate child $B_1$ belong to one pocket cut ball. Extra wall encounters outside this prism cannot change a global disk inclusion or add an intermediate dome without covering the strict witness point.

Finally the actual positive reference $B$ band selects the physical book windows. Its two lateral attaching collars extend along the two actual black cores toward $B_0$ and $B_1$. At $B_0$, the small selected ceiling cap is on the inner, return-ear side of the common arc. The crossing-facing core germ is outside that cap. At $B_1$, its small ceiling cap is on the outer-wall side; the crossing-facing germ is again outside that cap, but lies inside the $W_1$ domain. Push these two actual core germs slightly into the lower chamber, retaining their interval parameters. They therefore meet the lower/root-facing copy of $B_0$ and the lower copy of $B_1$ facing the pocket between $W_1$ and $B_1$, respectively. Both are **lower** copies; one must not replace the second by the upper $B_1$ copy. This identifies the $P$ bank with the $B_0$-side window and the $Q$ bank with the $B_1$-side window of the actual positive band. The reference band carries the endpoint signs; no Euclidean coordinate-plane assumption about the two curved tube walls is needed.

## The black-core argument that names the returns

The sign pair $(B+,B-)$ alone does not specify a pair of physical endpoints. The following is the extra geometric argument, using the already constructed absence of black push-throughs of types7 and8. Its inputs are actual boundary traces and core regions, not the target Figure31 incidence table.

The chain preserves one black **face**, not merely the connected black checkerboard surface. Here is the finite corner-state calculation which supplies this distinction. At a crossing label the four edge germs cyclically $h_0,h_1,h_2,h_3$, choosing the start so that the black face corners are $(h_0,h_1)$ and $(h_2,h_3)$. A corner occurrence is retained separately even when the two black corners carry the same global face label. In the standard positive $B$ crossing band, the two boundary traces on the LOWER crossing face join $h_0$ to $h_1$ and $h_2$ to $h_3$. Each trace is the boundary arc next to its indicated black corner. This is read by cutting the reference half-twisted rectangle at its equator: the lower boundary portions run around the two black corner disks; the rectangle CORE instead connects the two black faces and is not a trace on $S_-$. A common positive band of $F$ is the same reference band with its boundary collars fixed, so it has precisely this pairing. No claim here uses the opposite, negative-band corner pairing.

Thus the transition table for the adjacent-face state is

| Actual lower trace step | Entry black face occurrence | Exit black face occurrence |
|---|---|---|
| ordinary tube along an edge | the face on the chosen side of that edge | that same face |
| positive crossing-face trace $h_0$–$h_1$ | face of corner $(h_0,h_1)$ | that same corner face |
| positive crossing-face trace $h_2$–$h_3$ | face of corner $(h_2,h_3)$ | that same corner face |

Orient the return with this black face on its right. The two local identifications at a tube/crossing join use the same corner occurrence. Induction along the finite actual trace word therefore preserves ONE disk of $B\setminus\setminus C$. Passing through several positive-band boundary arcs never traverses the interior core of any band, and cannot change to its other black face. At every step the little collar from the trace toward that face lies on the $T_-$ side; its consecutive endpoint germs agree. Consequently all steps abut ONE component $R$ of that black face cut by the actual upper-circle traces inside $T_-$. The black face is a disk, and cutting it along the disjoint proper common-face arcs gives disks, so $R$ is a disk. Only these arbitrarily small collars, and not a supposed spanning strip through multiple black cores, are required. They retain the two original return endpoints. Denote their black-face-side boundary interval by $b$.

This derives the precise assertion written immediately before Convention B0 in the primary v2 source (TeX1709–1711, PDF31): one disk of $B\cap T_-\setminus\setminus C$ abuts every lower tube and crossing-face piece met by the return. The derivation uses the positive-band corner pairing, not signs at the two ends alone.

Cut that black core along its actual common $F$ traces. If $R$ were incident to two different black common-face arcs of the upper circle, a simple arc in $R$ would join interior points of those two arcs. Its interior misses $F$, it meets the common face in one interval, and its projection misses every lower tube section because its interior is in the open black core. The endpoint arcs are different common-face intervals of the same upper circle, so the push-through nonincidence condition holds. The existing cut-ball disk parameters supply its companion arc on the upper $F$ disk. This is an actual forbidden type7 black push. Consequently $R$ has just one such upper common-face arc, call it $b_\gamma$. The collar strip from the return to $b$, followed by $R$, is the physical black ear between the return and $b_\gamma$.

For the typeIII return, its initial $B+$ endpoint is the ordinary-edge endpoint of this particular $b_\gamma$. Name that edge $E0$ and that arc $B_0$. The other end of this one common-face arc is on the displayed upper overpass interval $O$ in the current prism. The ear has no other common-face side and its end collars have the original endpoint pairing, so its terminal $B-$ endpoint is the $O\cap B_0$ endpoint. It cannot end on another black arc farther along the boundary: that would put two upper common-face sides in $R$ and give the type7 chord just excluded. This proves the named pair $E0\cap B_0\to O\cap B_0$, independently of the length of the lower band chain.

For the typeII return, first fix its crossing-side sector, rather than selecting an arbitrary end of $O$. In a local projection chart take the upper overpass along the $x$ axis and the underpass along the $y$ axis. Choose the $y$ direction so that the inner $T_-$ side is $y>0$, and the $x$ direction so that its black corner is $x>0,y>0$. The lower underpass germ entering $T_-$ then runs toward $y>0$, so the corner-state rule puts its adjacent black face at the positive-$x$ end of $O$. This is the end named $B_1$ in the directed word $W_0,E0,B_0,O,B_1,E1,W_1$; reversing the full word just reverses the chart names. The other black corner is $x<0,y<0$ and is not reached by this initial germ. Follow the same black-side strip from that germ into this actual black sector. Its core region is therefore the one whose upper common-face side is $B_1$. Let $\tau$ be the upper tube interval containing the terminal W+ endpoint. Its black-side tube collar is incident to this same core region: that is the terminal rectangle in the actual flattened return strip. If $\tau$ were not incident to $B_1$, take an arc from the interior of $B_1$ across the open region to this terminal collar, followed by its short upper-tube tail. This meets the common face in one interval and has endpoints on $B_1$ and $\tau$, both on the same upper circle. These intervals are distinct; the only possible common-face arc meeting both would be $B_1$ itself, which is excluded by the assumed nonincidence. The tube tail is chosen in the interior of the one old upper graph interval, so its longitudinal projection misses every opposite lower boundary interval; shrink it away from the interval endpoints. Thus this is an actual type8 black push, forbidden by the normal form. Therefore $\tau$ is incident to $B_1$.

The two upper tube intervals incident to the displayed $B_1$ are $O$ and $E1$. The interval $O$ is the overpass interval with no W port. Since the terminal is W+, it lies on $E1$, and its common white continuation is $W_1$. A farther W endpoint, even if connected through arbitrarily many lower common bands, gives the same forbidden type8 arc at the strip's terminal core region. This proves the required typeII pair without assuming circular adjacency of unnamed initial and terminal points. The finite wall table and the witness construction above can now use these **named physical** endpoints.

The current derivation uses both parts of the actual joint graph normalization. In source PDF33, (i) the old disks project injectively, and (ii) **for every white point $z\in W\cap T_+$, the full set $F\cap\pi^{-1}(z)$ consists of a single point, lying in $X$**. Merely having a unique upper sheet would not suffice for the no-extra-sheet argument. An independent dome-positioning procedure may not be assumed to preserve (ii) unless this is checked; the readout here uses the actual simultaneous placement with both conditions, not an arbitrary later repositioning.

## Global-label parity fixes every domain side

The new proof in `ordinary-upper-interval-separates-lower-disks.md` proves exactly the distinction needed here: the global lower boundary circles carrying $W_1$ and $B_1$ are different. It follows from essentiality applied to the ordinary upper interval $E1$, not from the old unaccepted all-arcs Proposition8.5-style claim. Other coincidences of global labels are not excluded or silently ignored.

Write $g_Z$ for the actual global lower boundary circle carrying the local trace $Z$. Each projected graph disk has the Jordan disk on one side of that circle as its domain. Its membership is zero at every inner white point by the **full-fibre** singleton condition. Along a transverse projected path, membership in that particular global domain toggles at each crossing of its boundary. This fixes all its local patches; they cannot be chosen independently when several local traces have the same global label.

The inner wall is directed from the left white dual face to the right one. Its complete crossing word, in the physical order $E0,O,U,E1$, is

$$
g_{B_0},\quad g_{B_0},\quad g_{W_1},\quad g_{W_1}.
$$

Start at its inner white end, which belongs to no lower graph domain. Toggling these **global** labels yields the successive gap-membership sets

$$
\varnothing,\quad\{g_{B_0}\},\quad\varnothing,\quad\{g_{W_1}\},\quad\varnothing.
$$

The outer wall starts in the left outer white gap. A path to it from the inner white end crosses just the actual $W_0$ trace on the white end face, so its membership set is $\{g_{W_0}\}$. The physical channel order there is $E0,U,O,E1$ and the complete crossing word is

$$
g_{W_0},\quad g_{W_1},\quad g_{B_1},\quad g_{B_1}.
$$

Thus its successive gap sets are

$$
\{g_{W_0}\},\quad\varnothing,\quad\{g_{W_1}\},\quad\{g_{W_1},g_{B_1}\},\quad\{g_{W_1}\}.
$$

Here $g_{W_1}\ne g_{B_1}$ by the ordinary-upper-interval argument, so the fourth set really contains two global disks. This remains true if $g_{W_0}$ or $g_{B_0}$ coincides with another permitted label: the toggles are applied to the actual same global circle each time. For example, $W_0$ and $B_0$ need not be separately declared distinct merely to identify their root-facing local copies.

These are the complete crossing words because each of the four old tube sections is unique, the walls lie outside the sole active crossing footprint, and no common-face trace intersects a wall except through the already named local end faces. The annulus excludes every additional boundary trace as above. A domain with no local boundary trace would have constant membership throughout the connected annulus; its value is zero at the inner white point. Thus it cannot add an unrecorded lower height. This also handles a second local patch of a named global disk: its side is already determined by the same global-circle toggle, rather than by the diagram colour.

The outer gap $(O,E1)$ consequently gives two distinct actual heights, belonging to $W_1$ and $B_1$; $(U,O)$ gives only $W_1$. The inner gap $(E0,O)$ gives only $B_0$. These are the strict physical witnesses used in the cut-ball paragraph above. They prove the claimed nesting and immediate-pocket incidence without assuming a pictured overlap or the stronger generic “distinct arcs have distinct lower disks” assertion.
