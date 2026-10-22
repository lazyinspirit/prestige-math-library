exec(open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/conway-named/inputs/marked-movie-search.py').read().split("if __name__=='__main__':")[0])
oRI=S.reverse_type_I;oRII=S.reverse_type_II

def rI(L,cs,label,hand,rebuild=False):
 b=snap(L);idx=[L.crossings.index(cs.crossing),cs.strand_index];mark=cs.crossing.mark[cs.strand_index%2]
 r=oRI(L,cs,label,hand,rebuild);L.crossings[-1].mark=(mark,mark)
 movie.append({'move':'inverse-R1','at':idx,'hand':hand,'before':b,'after':snap(L)})
 return r

def rII(L,c,d,l1,l2,rebuild=False):
 b=snap(L);idx=[[L.crossings.index(q.crossing),q.strand_index] for q in [c,d]];mc=c.crossing.mark[c.strand_index%2];md=d.crossing.mark[d.strand_index%2]
 r=oRII(L,c,d,l1,l2,rebuild)
 for x in L.crossings[-2:]:x.mark=(md,mc)
 movie.append({'move':'inverse-R2','at':idx,'before':b,'after':snap(L)})
 return r
S.reverse_type_I=rI;S.reverse_type_II=rII

